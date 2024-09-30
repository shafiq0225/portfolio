import { Injectable, InjectionToken } from '@angular/core';
import { Mode } from './mode-toggle.model';


export interface ModeStorage { 
  save(mode: Mode): void;
  get(): Mode;
}

export const MODE_STORAGE_SERVICE = new InjectionToken<ModeStorage>(
  "MODE_STORAGE"
);


@Injectable({
  providedIn: 'root'
})
export class ModeLocalStorageService implements ModeStorage {

  constructor() { }

  LOCAL_STORAGE_KEY = "mode";


  save(mode: Mode): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, mode.toString());
  }
  get(): Mode {
    return (localStorage.getItem(this.LOCAL_STORAGE_KEY) as Mode) || undefined;
  }
}
