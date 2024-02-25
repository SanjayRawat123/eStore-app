import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsGellaryComponent } from './components/products-gellary/products-gellary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'products', component: ProductsGellaryComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
