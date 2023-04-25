import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePanelComponent } from './core/core-panel/core-panel.component';
import { VirtualComponent } from '../virtual/components/virtual/virtual.component';
import { RealComponent } from './real-betting/components/real/real.component';
import { StatisticsComponent } from './statistics/components/statistics.component';
import { ShopComponent } from './shop/components/shop/shop.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { LoginComponent } from './login/components/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { RealMenuComponent } from './real-betting/components/real-menu/real-menu.component';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    component: CorePanelComponent
  },
  {
    path: 'virtual',
    component: VirtualComponent
  },
  {
    path: 'real',
    component: RealComponent,
  },
  {
    path: 'real',
    component: RealMenuComponent,
    outlet: 'menu',
  },
  {
    path: 'statistics',
    component: StatisticsComponent, children: [
      {
        path: 'dupa',
        outlet: 'test',
        pathMatch: 'full',
        component: LanguageComponent
      }
    ]
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
