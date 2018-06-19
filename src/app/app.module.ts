import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import {SocialLoginModule,AuthServiceConfig,FacebookLoginProvider,GoogleLoginProvider} from "angular5-social-login";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoadloginService } from './loadlogin.service';
import { MyProfileComponent } from './my-profile/my-profile.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactComponent },
  {path:'login',component:LoginComponent},
  { path: '**', component: PageNotFoundComponent },
  {path:'myProfile',component:MyProfileComponent}
];

export function getAuthServiceConfigs()
{
let config = new AuthServiceConfig([
  // {
  //   id:FacebookLoginProvider.PROVIDER_ID,
  //   provider:new FacebookLoginProvider("") 
  // },
   {
id:GoogleLoginProvider.PROVIDER_ID,
provider:new GoogleLoginProvider("468748689868-i1hg3iuq4q3bl5ji1l4oief7fatdooar.apps.googleusercontent.com")
  },
  // {
  //   id:FacebookLoginProvider.PROVIDER_ID,
  //   provider:new FacebookLoginProvider("")
  // }
]);
return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
RouterModule.forRoot(
  appRoutes
  // { enableTracing: true } // <-- debugging purposes only
    ),
    SocialLoginModule  
],
  providers: [LoadloginService,{provide:AuthServiceConfig,useFactory:getAuthServiceConfigs}],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
