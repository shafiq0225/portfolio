import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { PortfolioComponent } from "./core/components/portfolio/portfolio.component";
import { ModeToggleService } from './core/components/mode-toggle/mode-toggle.service';
import { ToasterComponent } from "./core/components/toaster/toaster.component";
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from './core/components/mode-toggle/mode-local-storage.service';
import { getDynamicExperienceYears } from './core/utils/experience.util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponent, ToasterComponent],
  providers: [ModeToggleService, { provide: MODE_STORAGE_SERVICE, useClass: ModeLocalStorageService }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app-portfolio';

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    const expYears = getDynamicExperienceYears('2017-09-03');
    this.meta.updateTag({
      name: 'description',
      content: `Shafiq Ahamed is a Senior Software Engineer with ${expYears} of experience in ASP.NET Core, Apache Kafka, Cassandra, Angular, and Micro Frontend architecture — building distributed systems at global scale.`
    });
  }
}
