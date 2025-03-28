import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.1.68:4000/user/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = await AsyncStorage.getItem('authToken');
            // console.log("TOKEN => ", token)
            // const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;