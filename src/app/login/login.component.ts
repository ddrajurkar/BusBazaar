import { Component, OnInit } from '@angular/core';
import { AuthService,GoogleLoginProvider,FacebookLoginProvider} from "angular5-social-login";
import { Router } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//  _ref:any;   
  // removeObject(){
  //   this._ref.destroy();
  // }  

authorized : boolean
router:Router

  constructor(private SocAuthSrv:AuthService) {

  }
  
  public SocialSignIn(socialplatform:string){
       let socialplatformprovider
       if(socialplatform == "Google"){
         socialplatformprovider=GoogleLoginProvider.PROVIDER_ID;
       }
       else if(socialplatform == "Facebook"){
         socialplatformprovider=FacebookLoginProvider.PROVIDER_ID;
       }    
       
       this.SocAuthSrv.signIn(socialplatformprovider).then(
        (userData) => {
          //console.log(socialplatform+" sign in data : " , userData);
          // Now sign-in with userData        
          if (userData != null) {
                 this.authorized = true;
                // this.user = userData;               
            }});                                     
  }
  public gglLogin()
  {
    this.SocialSignIn('Google');
    if(this.authorized)
    {
      this.router.navigate([MyProfileComponent]);
       //this.router.navigateByUrl('myProfile')
    }
    else
    {
      this.router.navigate([PageNotFoundComponent]);
      //this.router.navigateByUrl('**')
    }
  }

  ngOnInit() {
 
  }
}
