import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../../directives/product-card.directive';
import { ProductServicesService } from '../../../services/product-services.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() SelectedCategoryID: number = 0;
  filteredProducts: IProduct[];
  message: string = '';
  PurchaseDate!: Date;
  clicked: boolean = false

  constructor(public productsService: ProductServicesService,public router: Router) {
    this.filteredProducts = this.productsService.getAllProducts();
  }

  Buy(product: IProduct, quantity: number) {
    if (quantity > 0 && quantity <= product.quantity) {
      product.quantity -= quantity;
      this.PurchaseDate = new Date();
      alert(` You have successfully purchased ${quantity} ${product.name} for ${product.price * quantity} EGP on ${this.PurchaseDate.toString().split('GMT')[0]}`);
    } else {
      alert('Invalid Quantity');
    }
  }
  filterFunction() {
    this.filteredProducts = this.productsService.getProductsByCategory(this.SelectedCategoryID);
  }
  
  ngOnInit() {
    this.filteredProducts = this.productsService.getAllProducts();
  }
  showDetails(prdID: number){
    // this.router.navigateByUrl(`/productDetails/${prdID}`);
    this.router.navigate(['/productDetails' , prdID])
  }
  
}
