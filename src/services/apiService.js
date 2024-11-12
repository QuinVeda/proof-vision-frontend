import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
    API_URL = "https://proofvision.easyml.me/api"

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
        const token = await AsyncStorage.getItem('token');
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

}

export default new ApiService();