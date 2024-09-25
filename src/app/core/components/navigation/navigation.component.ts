import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  public isLoading = signal(true);
  public navOptions = signal([
    { href: '#about', title: 'About' },
    { href: '#experience', title: 'Experience' },
    { href: '#projects', title: 'Projects' },
    { href: '#contact', title: 'Contact' },
  ]);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
