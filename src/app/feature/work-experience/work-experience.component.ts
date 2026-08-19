import { Component } from '@angular/core';
import { getDynamicExperienceYears, getCompanyDuration } from '../../core/utils/experience.util';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  public experienceYears = getDynamicExperienceYears('2017-09-03');

  // Dynamic & Fixed Company Experience Durations
  public eyDuration = getCompanyDuration('2022-06-03'); // Present (Auto-updates every month)
  public infosysDuration = getCompanyDuration('2021-02-08', '2022-05-31'); // 1 yr 3 mos
  public hclDuration = getCompanyDuration('2017-09-03', '2021-02-01'); // 3 yrs 5 mos
}
