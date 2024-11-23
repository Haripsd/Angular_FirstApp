import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { CardBootstrapComponent } from './component/card-bootstrap/card-bootstrap.component';
import { DatabindingexComponent } from './component/databindingex/databindingex.component';
import { CounterComponent } from './component/counter/counter.component';
import { WishMessageComponent } from './component/wish-message/wish-message.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ChangeUserNameComponent } from './component/change-user-name/change-user-name.component';
import { SmsAppComponent } from './component/sms-app/sms-app.component';
import { ShowPasswordComponent } from './component/show-password/show-password.component';
import { AmountRangeComponent } from './component/amount-range/amount-range.component';
import { AppThemeComponent } from './component/app-theme/app-theme.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { AuthUserComponent } from './component/auth-user/auth-user.component';
import { ShoppingCartExForComponent } from './component/shopping-cart-ex-for/shopping-cart-ex-for.component';
import { ProductComponent } from './component/product/product.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { UserComponent } from './component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactAppComponent } from './component/contact-app/contact-app.component';
import { ContactCardComponent } from './component/contact-card/contact-card.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { ContactdetailsbyIdComponent } from './component/contactdetailsby-id/contactdetailsby-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBootstrapComponent,
    DatabindingexComponent,
    CounterComponent,
    WishMessageComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ChangeUserNameComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    AppThemeComponent,
    UserRegisterComponent,
    AuthUserComponent,
    ShoppingCartExForComponent,
    ProductComponent,
    PipesExComponent,
    UserComponent,
    ContactListComponent,
    ContactAppComponent,
    ContactCardComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ContactDetailsComponent,
    ContactdetailsbyIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
