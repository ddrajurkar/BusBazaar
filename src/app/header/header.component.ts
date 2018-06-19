import { Component,  OnInit,
  ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { LoadloginService } from '../loadlogin.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  // providers:[LoadloginService]
})
export class HeaderComponent {
 
  @ViewChild('login', { 
    read: ViewContainerRef 
  })
  viewContainerRef: ViewContainerRef
  srvc: any;

  constructor(private service:LoadloginService) {   
    this.srvc = service
  }

  load() {
    this.srvc.setRootViewContainerRef(this.viewContainerRef)
    this.srvc.addLoginComponent()
  }
  remove()
  {
    this.srvc.setRootViewContainerRef(this.viewContainerRef)
    this.srvc.removeLoginComponent()
  }
 
}
