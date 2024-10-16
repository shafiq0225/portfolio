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
      title: 'Netflix Home Page',
      description:
        'Clone of Netflix website built using Angular as a Front-end',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s.',
      live: 'https://shafiq0225.github.io/app-netflix/browse',
    },    
    {
      title: 'Simple Calculator',
      description:
        'Simple, highly configurable and modular calculator developed using Angular framework.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR697xyMAHvYprLralN94basdHM0w3SJXu6zNFiArgyTVwC-VaN8DG-0O2Jzy3NfL8EJto&usqp=CAU',
      live: 'https://calculator.pravinmane.com/',
    },
    {
      title: 'Credit card input page challenge',
      description:
        'Worked upon a credit card input page challenge from frontEndMaster. Built a responsive card input component.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--HxPlwIymjO6xEwvilwdr41taAhEm_SipNM4HDV3sMSiS0RovP2pAUQleZpv2D-Oi14&usqp=CAU',
      live: 'https://pravinmane1.github.io/login-card-challenge/',
    },

    {
      title: 'Book Store App',
      description:
        'This is a online book store app implementation using firebase. That includes Google signIn, Phone Number verification, Cart, Books listing of different courses, wishlist, profile, order management.',
      techList: ['Android', 'Java', 'Firebase'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/android-app-icon.png',
      live: 'https://github.com/pravinmane1/Bookambo-Online-book-store',
    },
    {
      title: 'Online Car Renting Android App',
      description:
        'A car renting application made using firebase. User can book and rent a car using this app. This app has google sign in, email sign in, Virtual wallet, Cars listing and admin dashboard to manage the cars listing and to manage bookings.',
      techList: ['Android', 'Java', 'Firebase'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://www.nevinainfotech.com/new-ni-images/services_pages_img/android-app-development-img.svg',
      live: 'https://github.com/pravinmane1/Safar-Car-Renting-Online-App',
    },
    {
      title: 'Attendance Android App',
      description:
        'Attendance app for teacher to track attendance of different classes by adding timetable and attendance of the student.',
      techList: ['Android', 'Java', 'XML', 'Firebase'],
      github: 'https://github.com/shafiq0225',
      screenshot:
        'https://www.radicallogix.com/assets/img/student-attendance-features.png',
      live: 'https://github.com/pravinmane1/AttendanceApp/',
    },
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
