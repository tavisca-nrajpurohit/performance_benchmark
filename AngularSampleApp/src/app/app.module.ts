import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { NgTextareaComponent } from './ng-textarea/ng-textarea.component';
import { NgInputComponent } from './ng-input/ng-input.component';
import { NgDropdownComponent } from './ng-dropdown/ng-dropdown.component';
import { NgCheckboxComponent } from './ng-checkbox/ng-checkbox.component';
import { NgCombineComponent } from './ng-combine/ng-combine.component';

@NgModule({
  declarations: [
    AppComponent,
    NgButtonComponent,
    NgTextareaComponent,
    NgInputComponent,
    NgDropdownComponent,
    NgCheckboxComponent,
    NgCombineComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  entryComponents: [NgButtonComponent,NgCheckboxComponent,NgDropdownComponent,NgInputComponent,NgTextareaComponent,NgCombineComponent] 
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const Btncomp = createCustomElement(NgButtonComponent, {
      injector: this.injector
    });

    const Textareacomp = createCustomElement(NgTextareaComponent, {
      injector: this.injector
    });

    const Inputcomp = createCustomElement(NgInputComponent, {
      injector: this.injector
    });

    const Dropdowncomp = createCustomElement(NgDropdownComponent, {
      injector: this.injector
    });

    const Checkboxcomp = createCustomElement(NgCheckboxComponent, {
      injector: this.injector
    });

    const Combinecomp = createCustomElement(NgCombineComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('app-sample-button', Btncomp);
    customElements.define('app-sample-textarea', Textareacomp);
    customElements.define('app-sample-input', Inputcomp);
    customElements.define('app-sample-dropdown', Dropdowncomp);
    customElements.define('app-sample-checkbox', Checkboxcomp);
    customElements.define('app-sample-combine', Combinecomp);

  }
}
