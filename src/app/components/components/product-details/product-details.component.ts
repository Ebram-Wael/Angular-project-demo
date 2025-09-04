import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../models/iproduct';
import { ProductServicesService } from '../../../services/product-services.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  product: IProduct | any = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public productServicesService: ProductServicesService,
    public location: Location
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id')) // id
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.product = this.productServicesService.getProductById(this.productId)
  }

  goBack() {
    this.location.back();
  }
  
}
