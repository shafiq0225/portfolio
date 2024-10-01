import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  @Input() withCloseBtn = false;
  @Output() closeClicked = new EventEmitter();
  public isLoading = signal(true);
  public moveNavRight = signal(false);
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

  onCloseClicked() {
    this.moveNavRight.set(true);
    setTimeout(() => {
      this.closeClicked.emit();
    },300);
  }
}
