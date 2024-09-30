import { Inject, Injectable } from '@angular/core';
import { Mode } from './mode-toggle.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { MODE_STORAGE_SERVICE, ModeStorage } from './mode-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModeToggleService {
  private currentMode: Mode = Mode.LIGHT;
  private modeChangedSubject = new BehaviorSubject(this.currentMode);
  modeChanged$: Observable<Mode>;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(MODE_STORAGE_SERVICE) private modeStorage: ModeStorage) {
    this.modeChanged$ = this.modeChangedSubject.asObservable();
    this.init();
   }


   private init() {
    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    let initMode = this.modeStorage.get();
    if (!initMode) {
      initMode = deviceMode.matches ? Mode.DARK : Mode.LIGHT;
    }
    this.updateCurrentMode(initMode);
    this.document.body.classList.add(this.currentMode);
  }

   toggleMode() {
    this.document.body.classList.toggle(Mode.LIGHT);
    this.document.body.classList.toggle(Mode.DARK);
    if (this.currentMode === Mode.LIGHT) {
      this.updateCurrentMode(Mode.DARK);
    } else {
      this.updateCurrentMode(Mode.LIGHT);
    }
  }


  private updateCurrentMode(mode: Mode) {
    this.currentMode = mode;
    this.modeChangedSubject.next(this.currentMode);
    this.modeStorage.save(this.currentMode);
  }
}
