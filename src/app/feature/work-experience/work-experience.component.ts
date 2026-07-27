import { Component } from '@angular/core';
import { getDynamicExperienceYears, getDynamicExperienceDetailed } from '../../core/utils/experience.util';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  public experienceYears = getDynamicExperienceYears('2017-09-03');
  public experienceDetailed = getDynamicExperienceDetailed('2017-09-03');
}
