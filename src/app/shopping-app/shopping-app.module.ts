import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAppRoutingModule } from './shopping-app-routing.module';
import { ShoppingAppComponent } from './shopping-app.component';

@NgModule({
  declarations: [
   ShoppingAppComponent
  ],
  imports: [
    ShoppingListComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingAppRoutingModule,
    SharedModule,
  ],
})
export class ShoppingAppModule {}
