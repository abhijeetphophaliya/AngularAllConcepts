import { RouterModule } from '@angular/router';
import { Summary } from './summary.pipe';
import { AppErrorHandler } from './app-error-handler';
import { PostService } from './services/post.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { InputFormatDirective } from './input-format.directive';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactFormComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    Summary,
    InputFormatDirective,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'Home',component: TestComponent},
      {path:'Favorite',component: FavoriteComponent},
      {path:'ContactForm',component: ContactFormComponent}
    ])
  ],
  providers: [
    PostService,
    {provide : ErrorHandler , useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
