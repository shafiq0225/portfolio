import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input() onlyIcons!: boolean;
}
