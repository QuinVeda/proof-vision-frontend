import axios from 'axios';
import asyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
    API_URL = "https://proofvision.easyml.me/api/"

    constructor() {
        this.ax = this.init();
    }

    init() {
        return axios.create({
            baseURL: this.API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getAuthHeaders() {
        const token = await asyncStorage.getItem('token');
        console.log(token);
        
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    async get(endpoint) {
        try {
            const headers = await this.getAuthHeaders();
            const response = await this.ax.get(endpoint, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            const headers = await this.getAuthHeaders();
            const response = await this.ax.post(endpoint, data, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async createUser(data) {
        try {
            const response = await this.ax.post('auth/register/', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        const res = await this.get('auth/user/')
        return res;        
    }

    async login(data) {
        console.log("fdsdfsd",data);
        const res = await this.post('auth/login/', data);
        console.log(res);
        
        await asyncStorage.setItem('token', res.data.access);
        return res;
    }

    async logout() {
        asyncStorage.removeItem('token');
    }

}

export default new ApiService();