import { Component } from '@angular/core';
import { AppExtension, getAppContext } from '@contrail/extensions-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isExtensionInitialized = true;

  async ngOnInit() {
    await AppExtension.registerAppExtension();
    this.isExtensionInitialized = true;
    console.log("getAppContext: ", getAppContext())
    

  }
}
