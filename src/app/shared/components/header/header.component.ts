import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../../../auth/store/auth.actions';
import * as RecipeActions from '../../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
      this.store.dispatch(RecipeActions.fetchRecipes());
  }

  onSaveData() {
    this.store.dispatch(RecipeActions.storeRecipes());
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.click();
    }
  }
}
