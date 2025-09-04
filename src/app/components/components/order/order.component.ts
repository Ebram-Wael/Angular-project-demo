import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ICustomer } from '../../../models/icustomer';
import { SeparatorPipe } from "../../../pipes/separator.pipe";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent, SeparatorPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothes' },
    { id: 3, name: 'Books' }
  ];
  user: ICustomer = { id: 1, name: 'Ebram', email: 'X4v2u@example.com', phone: '1234567890', address: '123 Main St, Anytown, USA', creditCard: 1111222233334444 };

  selectedCategoryID: number = 0

}
