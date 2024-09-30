import { NgClass } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { Mode } from './mode-toggle.model';
import { ModeToggleService } from './mode-toggle.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss'
})
export class ModeToggleComponent {
  private mode!: Signal<Mode>;
  public isLightMode!: Signal<boolean>;
  constructor(private modeToggleService: ModeToggleService) {
    this.mode = toSignal(this.modeToggleService.modeChanged$) as Signal<Mode>;
    this.isLightMode = computed(() => this.mode() === Mode.LIGHT);
  }

  toggle() {
    this.modeToggleService.toggleMode();
  }
}
