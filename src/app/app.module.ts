import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CasasComponent } from './components/casas/casas.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from './shared.service';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextfilterPipe } from './pipes/textfilter.pipe';
import { EditheroeComponent } from './components/editheroe/editheroe.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CasasComponent,
    HeroeComponent,
    NavbarComponent,
    TextfilterPipe,
    EditheroeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
