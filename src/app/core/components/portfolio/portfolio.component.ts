import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../../../feature/hero/hero.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
