export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface User {
    id: number;
    email: string;
    username: string;
    name: {
      firstname: string;
      lastname: string;
    };
    phone?: string;
    address?: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      }
    };
  }