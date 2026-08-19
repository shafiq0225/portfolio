import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Mutual Fund Tracker & AI MCP Gateway Platform',
      description:
        'Full-stack Mutual Fund management platform & Model Context Protocol (MCP) server exposing financial tools, 9-scheme portfolio consolidation, and automated 05:05 AM IST daily morning digests across Telegram & WhatsApp.',
      techList: ['.NET 8', 'MCP Protocol', 'Telegram API', 'UltraMsg WhatsApp', 'MySQL Cloud', 'Quartz.NET', 'Angular 18', 'Docker'],
      github: 'https://github.com/shafiq0225/MutualFundConsolidated',
      live: 'https://mutualfund-ui.onrender.com/login',
      screenshot: './assets/mutual_fund_monolith.svg',
    },
    {
      title: 'Enterprise Mutual Fund Platform (Microservices & MFE)',
      description:
        'Distributed Mutual Fund trading & portfolio management platform built with microservices architecture and Native Federation Micro Frontends (MFE). Features independent MFE deployments, Apache Kafka event streaming, Redis caching, MongoDB persistence, and Ocelot API Gateway routing.',
      techList: ['ASP.NET Core 8', 'Microservices', 'Angular MFE', 'Apache Kafka', 'Redis', 'MongoDB', 'Ocelot'],
      github: 'https://github.com/shafiq0225/MutualFundAppV2',
      live: 'https://app-mutualfund-frontend.azurewebsites.net/',
      screenshot: './assets/mutual_fund_mfe.svg',
    },
    {
      title: 'Personal Portfolio App',
      description:
        'Production-grade Angular 18 SPA showcasing experience, skills, and projects. Built with Angular Signals, standalone components, lazy routing, dynamic experience calculation, and accessibility-first design patterns.',
      techList: ['Angular 18', 'TypeScript', 'Angular Signals', 'SCSS', 'GitHub Pages'],
      github: 'https://github.com/shafiq0225/portfolio',
      live: 'https://shafiq0225.github.io/portfolio/',
      screenshot: './assets/portfolio_app.svg',
    },
    {
      title: 'AirBnB Clone',
      description:
        'End-to-end clone of the Airbnb vacation rental app built with Angular, RxJS, and TypeScript. Demonstrates component architecture, reactive data flow, and responsive UI design.',
      techList: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/AirBNB-clone',
      live: 'https://shafiq0225.github.io/AirBNB-clone/',
      screenshot: './assets/airbnb_clone.svg',
    },
    {
      title: 'Netflix Home Page',
      description:
        'Pixel-accurate Netflix landing page clone built with Angular. Focuses on responsive layout, CSS precision, and component-driven UI structure.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/app-netflix',
      live: 'https://shafiq0225.github.io/app-netflix/browse',
      screenshot: './assets/netflix_clone.svg',
    },
    {
      title: 'Modular Calculator',
      description:
        'Simple, highly configurable, and modular calculator app built with Angular. Demonstrates clean component decomposition and reusable UI patterns.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/clean-calculator',
      live: 'https://shafiq0225.github.io/clean-calculator/',
      screenshot: './assets/calculator_app.svg',
    }
  ];

  public visibleProjects = this.projects.slice(0, 4);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
