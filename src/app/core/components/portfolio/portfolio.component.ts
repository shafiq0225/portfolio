import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../../../feature/hero/hero.component";
import { AboutComponent } from "../../../feature/about/about.component";
import { WorkExperienceComponent } from "../../../feature/work-experience/work-experience.component";
import { ProjectsComponent } from "../../../feature/projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, WorkExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
