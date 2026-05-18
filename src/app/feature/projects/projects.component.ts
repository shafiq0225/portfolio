import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Personal Portfolio',
      description:
        'Production-grade Angular 18 SPA showcasing experience, skills, and projects. Built with Angular Signals, standalone components, lazy routing, and accessibility-first design patterns.',
      techList: ['Angular 18', 'TypeScript', 'Angular Signals', 'SCSS', 'GitHub Pages'],
      github: 'https://github.com/shafiq0225/portfolio',
      screenshot: 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681629704/logo_smny53.png',
      live: 'https://shafiq0225.github.io/portfolio/',
    },
    {
      title: 'AirBnB Clone',
      description:
        'End-to-end clone of the Airbnb vacation rental app built with Angular, RxJS, and TypeScript. Demonstrates component architecture, reactive data flow, and responsive UI design.',
      techList: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/AirBNB-clone',
      screenshot: 'https://res.cloudinary.com/du63kkxhl/image/upload/v1681629704/logo_smny53.png',
      live: 'https://shafiq0225.github.io/AirBNB-clone/',
    },
    {
      title: 'Netflix Home Page',
      description:
        'Pixel-accurate Netflix landing page clone built with Angular. Focuses on responsive layout, CSS precision, and component-driven UI structure.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/app-netflix',
      screenshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s.',
      live: 'https://shafiq0225.github.io/app-netflix/browse',
    },
    {
      title: 'Modular Calculator',
      description:
        'Simple, highly configurable, and modular calculator app built with Angular. Demonstrates clean component decomposition and reusable UI patterns.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/clean-calculator',
      screenshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR697xyMAHvYprLralN94basdHM0w3SJXu6zNFiArgyTVwC-VaN8DG-0O2Jzy3NfL8EJto&usqp=CAU',
      live: 'https://shafiq0225.github.io/clean-calculator/',
    }
  ];

  public visibleProjects = this.projects.slice(0, 3);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
