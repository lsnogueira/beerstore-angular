import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: './products/products.module#ProductsModule'
  },
  { path: 'carrinho',
    component: CartComponent
  },
  { path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
