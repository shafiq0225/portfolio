import { Injectable } from '@angular/core';
import { Mode } from './mode-toggle.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeToggleService {
  private currentMode: Mode = Mode.LIGHT;
  private modeChangedSubject = new BehaviorSubject(this.currentMode);
  modeChanged$: Observable<Mode>;

  constructor() {
    this.modeChanged$ = this.modeChangedSubject.asObservable();
   }
}
