import { Routes } from '@angular/router';
import { OrderComponent } from './components/components/order/order.component';
import { AboutUsComponent } from './components/components/about-us/about-us.component';
import { ContactUsComponent } from './components/components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/components/not-found/not-found.component';
import { MainLayoutComponent } from './components/components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/components/product-details/product-details.component';
import { LoginComponent } from './components/components/login/login.component';
export const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: OrderComponent, title: 'Home' },
            { path: 'aboutUs', component: AboutUsComponent, title: 'About Us' },
            { path: 'contactUs', component: ContactUsComponent, title: 'Contact Us' },
            { path: 'productDetails/:id', component: ProductDetailsComponent, title: 'Product Details' }
        ]
    },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: '**', component: NotFoundComponent, title: '404' }
];  
