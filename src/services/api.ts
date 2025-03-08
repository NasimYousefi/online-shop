import axios from 'axios';
import { Product, User } from '../types';

const BASE_URL = 'https://fakestoreapi.com';

export const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  },

  async getCategories(): Promise<string[]> {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  }
};

export const UserService = {
  async getUserById(id: number): Promise<User> {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  }
};