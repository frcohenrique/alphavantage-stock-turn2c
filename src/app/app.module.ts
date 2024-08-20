import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { BrapiInterceptor } from './core/interceptors/brapi.interceptor';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BrapiInterceptor,
    multi: true,
  },
  provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
