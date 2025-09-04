import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  Products: IProduct[] = [];
  constructor() {
    this.Products = [
      { id: 1, name: 'Laptop', quantity: 1, description: 'A high-performance laptop', price: 999.99, image: 'https://example.com/laptop.jpg', categoryId: 1 },
      { id: 2, name: 'T-shirt', quantity: 20, description: 'A comfortable and stylish t-shirt', price: 19.99, image: 'https://example.com/t-shirt.jpg', categoryId: 2 },
      { id: 3, name: 'The Great Gatsby', quantity: 0, description: 'A classic novel by F. Scott Fitzgerald', price: 14.99, image: 'https://example.com/great-gatsby.jpg', categoryId: 3 },
      { id: 4, name: 'Smartphone', quantity: 15, description: 'A high-end smartphone with advanced features', price: 699.99, image: 'https://example.com/smartphone.jpg', categoryId: 1 },
      { id: 5, name: 'Jeans', quantity: 30, description: 'Stylish and comfortable jeans', price: 49.99, image: 'https://example.com/jeans.jpg', categoryId: 2 },
      { id: 6, name: 'The Catcher in the Rye', quantity: 1, description: 'A classic novel by J.D. Salinger', price: 12.99, image: 'https://example.com/catcher-in-the-rye.jpg', categoryId: 3 },
      { id: 7, name: 'Desktop Computer', quantity: 12, description: 'A powerful desktop computer', price: 899.99, image: 'https://example.com/desktop-computer.jpg', categoryId: 1 },
      { id: 8, name: 'Sweatshirt', quantity: 25, description: 'A comfortable and stylish sweatshirt', price: 24.99, image: 'https://example.com/sweatshirt.jpg', categoryId: 2 },
      { id: 9, name: 'The Great Expectations', quantity: 0, description: 'A classic novel by Charles Dickens', price: 10.99, image: 'https://example.com/great-expectations.jpg', categoryId: 3 },
      { id: 10, name: 'Tablet', quantity: 18, description: 'A compact and versatile tablet', price: 399.99, image: 'https://example.com/tablet.jpg', categoryId: 1 }
    ]
  }

  getAllProducts(): IProduct[] {
    return this.Products;
  }
  getProductById(id: number): IProduct | undefined {
    return this.Products.find(product => product.id == id);
  }
  getProductsByCategory(categoryId: number): IProduct[] {
    return this.Products.filter(product => product.categoryId == categoryId);
  }

}
