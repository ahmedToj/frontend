import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoents/partials/header/header.component';
import { HomeComponent } from './compoents/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './compoents/partials/search/search.component';
import { TagsComponent } from './compoents/partials/tags/tags.component';
import { FoodPageComponent } from './compoents/pages/food-page/food-page.component';
import { CartPageComponent } from './compoents/pages/cart-page/cart-page.component';
import { TitleComponent } from './compoents/partials/title/title.component';
import { NotFoundComponent } from './compoents/partials/not-found/not-found.component';
import { LoginPageComponent } from './compoents/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './compoents/partials/input-container/input-container.component';
import { InputValidationComponent } from './compoents/partials/input-validation/input-validation.component';
import { TextInputComponent } from './compoents/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './compoents/partials/default-button/default-button.component';
import { RegisterPageComponent } from './compoents/pages/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop:false
    })
    
    

  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
