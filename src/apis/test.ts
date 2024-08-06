import axios from 'axios';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function fetchmessage() {
  try {
    const response = await axios.get('/messages');
    return response.data;
  } catch (error) {
    console.error('api 호출 에러', error);
    throw error;
  }
}

export const sendmessage = async (message: string) => {
  try {
    const response = await axios.post('/messages', { message });
    return response.data;
  } catch (error) {
    console.error('send error', error);
    throw error;
  }
};
