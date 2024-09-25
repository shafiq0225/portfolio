import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { ModeToggleComponent } from "../mode-toggle/mode-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NavigationComponent, NgClass, ModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  public isLoading = signal(true);
  public isHeaderVisible = signal<boolean>(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    });
  }
}
