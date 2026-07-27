import { Component } from '@angular/core';
import { getDynamicExperienceYears, getDynamicExperienceDetailed } from '../../core/utils/experience.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public experienceYears = getDynamicExperienceYears('2017-09-03');
  public experienceDetailed = getDynamicExperienceDetailed('2017-09-03');
}
