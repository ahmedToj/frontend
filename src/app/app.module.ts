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
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    

  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
