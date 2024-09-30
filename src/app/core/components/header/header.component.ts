import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
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
  private currentScrollY = 0;
  public isMobileNavBarVisible = signal<boolean>(false);
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    });
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: Event) {
    const newScrollY = (event?.currentTarget as Window)?.scrollY;
    if (newScrollY && Math.abs(newScrollY - this.currentScrollY) > 10) {
      const scrolledTowardUp = newScrollY < this.currentScrollY;
      const headerCrossed = newScrollY > 100;
      this.isHeaderVisible.set(!headerCrossed || scrolledTowardUp);
      this.currentScrollY = (event.currentTarget as Window)?.scrollY;
    }
  }
}
