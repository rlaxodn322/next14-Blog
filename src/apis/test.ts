import axios from 'axios';
import { backUrl } from '../config/config';
import { Message } from '../types/Post';
axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export async function fetchmessage(): Promise<Message[]> {
  try {
    const response = await axios.get('/messages');
    return response.data.map((msg: { content: string }) => msg.content);
  } catch (error) {
    console.error('api 호출 에러', error);
    throw error;
  }
}

export const sendmessage = async (message: string): Promise<Message> => {
  try {
    const response = await axios.post('/messages', { message });
    return response.data;
  } catch (error) {
    console.error('send error', error);
    throw error;
  }
};

export const deletemessage = async (id: number) => {
  try {
    await axios.delete(`/messages/${id}`);
  } catch (error) {
    console.error('delete error', error);
    throw new Error();
  }
};
