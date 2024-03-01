import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsGellaryComponent } from './components/products-gellary/products-gellary.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { PastordersComponent } from './components/pastorders/pastorders.component';
import { authGuard } from './services/authguard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'products', component: ProductsGellaryComponent },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path: 'signup',
        component: UserSignupComponent,
      },
      {
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path:'pastorders',
        component:PastordersComponent,
        canActivate: [authGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
