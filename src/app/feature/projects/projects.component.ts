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
      title: 'AirBNB Clone',
      description:
        'End to end project clone of Airbnb - vacation rental app using Angular, Rxjs, TypeScript and more',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/AirBNB-clone',
      screenshot:
        'https://res.cloudinary.com/du63kkxhl/image/upload/v1681629704/logo_smny53.png',
      live: 'https://airbnb-clone-frontend-8w55.onrender.com/',
    },
    {
      title: 'Netflix Home Page',
      description:
        'Clone of Netflix website built using Angular as a Front-end',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/app-netflix',
      screenshot:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s.',
      live: 'https://shafiq0225.github.io/app-netflix/browse',
    },    
    {
      title: 'Simple Calculator',
      description:
        'Simple, highly configurable and modular calculator developed using Angular framework.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225/clean-calculator',
      screenshot:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR697xyMAHvYprLralN94basdHM0w3SJXu6zNFiArgyTVwC-VaN8DG-0O2Jzy3NfL8EJto&usqp=CAU',
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
