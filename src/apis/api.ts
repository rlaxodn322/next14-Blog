import axios from 'axios';
import { backUrl } from '../config/config';
import { ApiData, ApiData2 } from '@/types/Post';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export const fetchApiData = async (): Promise<ApiData> => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    console.error('Fali', error);
    throw new Error('Fali');
  }
};
export const fetchApiData1 = async (): Promise<ApiData> => {
  try {
    const response = await axios.get('/api/data1');
    return response.data;
  } catch (error) {
    console.error('Fali', error);
    throw new Error('Fali');
  }
};

export const fetchADST = async (): Promise<ApiData2> => {
  try {
    const response = await axios.get('api/ADSTdata');
    return response.data;
  } catch (error) {
    console.error('Fail', error);
    throw new Error('Fali');
  }
};
