// ##angular setup project cli

// ng new my-app -routing --style=scss --standalone --strict --inline-style=false --inline-template=false --skip-tests=false --prefix=app -d 

// ng generate component header --dry-run
// ng generate service auth --dry-run
// ng add @angular/material --dry-run

// app.routes.ts

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Product list
  { path: 'products', component: ProductListComponent },

  // Product detail with route parameter
  { path: 'products/:id', component: ProductDetailComponent },

  // 404 - must always be last
  { path: '**', component: NotFoundComponent },
];