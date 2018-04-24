import {Provider} from '@angular/core';
export class LocalStorage {
  public localStorage:any;
  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public set(key:string, value:string):void {
    this.localStorage[key] = value;
  }

  public get(key:string):string {
    return this.localStorage[key] || false;
  }

  public remove(key:string):any {
    this.localStorage.removeItem(key);
  }
}
