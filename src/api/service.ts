import { axiosClient } from './client'
import type { Product } from '../types';
import apiEndpoints from './endpoints';

export const getAllProducts = async (): Promise<Product[] | null> => {
    const response = await axiosClient.get(apiEndpoints.products);
    return response.data;
}