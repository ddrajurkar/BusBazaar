import {  Injectable, ComponentFactoryResolver, Inject, Component   } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable()
export class LoadloginService {
  factoryResolver: any;
  rootViewContainer: any;
  

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver}

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }
    addLoginComponent() {
      const factory = this.factoryResolver
                          .resolveComponentFactory(LoginComponent)
     const component = factory
        .create(this.rootViewContainer.parentInjector)
      this.rootViewContainer.insert(component.hostView)
    }

    
}
