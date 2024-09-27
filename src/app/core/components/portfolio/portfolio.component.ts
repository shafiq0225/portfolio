import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../../../feature/hero/hero.component";
import { AboutComponent } from "../../../feature/about/about.component";
import { WorkExperienceComponent } from "../../../feature/work-experience/work-experience.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, WorkExperienceComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
