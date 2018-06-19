import {  Injectable, ComponentFactoryResolver, Inject, Component   } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable()
export class LoadloginService {
  factoryResolver: any;
  rootViewContainer: any;
  expComponent:any;

  // constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
  //   this.factoryResolver = factoryResolver}
  constructor(private _cfr: ComponentFactoryResolver){}

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }
    addLoginComponent() {
    //   const factory = this.factoryResolver
    //                       .resolveComponentFactory(LoginComponent)
     
    //  const component = factory
    //     .create(this.rootViewContainer.parentInjector)
    //  this.rootViewContainer.insert(component.hostView)

      // check and resolve the component
  let comp = this._cfr.resolveComponentFactory(LoginComponent);
  // Create component inside container
   this.expComponent = this.rootViewContainer.createComponent(comp);
  // see explanations
  this.expComponent.instance._ref = this.expComponent;
  }
   
  removeLoginComponent()
  {
  this.expComponent.instance._ref.destroy();
  }
    
}
