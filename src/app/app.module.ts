import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorePanelComponent } from './core/core-panel/core-panel.component';
import { MenuComponent } from './menu/menu.component';
import { SideBarComponent } from './side-bar/side-bar-component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HeaderComponent } from './header/header-component';
import { SharedModule } from './shared/modules/shared.module';
import { RealComponent } from './real-betting/components/real/real.component';
import { LanguageComponent } from './language/language.component';
import { StatisticsComponent } from './statistics/components/statistics.component';
import { ShopComponent } from './shop/components/shop/shop.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { LoginComponent } from './login/components/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { CreateVirtualComponent } from 'src/virtual/components/create-virtual-bet/create-virtual-bet.component';
import { VirtualComponent } from 'src/virtual/components/virtual/virtual.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CdkMenuModule} from '@angular/cdk/menu';
import { CustomLeagueComponent } from './real-betting/components/custom-league/custom-league.component';
import { RealMenuComponent } from './real-betting/components/real-menu/real-menu.component';

// AoT requires an exported function for factories
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/en', '.json');
// }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SidePanelComponent,
    MenuComponent,
    CorePanelComponent,
    RealComponent,
    LanguageComponent,
    StatisticsComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    VirtualComponent,
    CreateVirtualComponent,
    CustomLeagueComponent,
    RealMenuComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CdkMenuModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

