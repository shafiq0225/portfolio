import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "./core/components/portfolio/portfolio.component";
import { ModeToggleService } from './core/components/mode-toggle/mode-toggle.service';
import { ToasterComponent } from "./core/components/toaster/toaster.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponent, ToasterComponent],
  providers: [ModeToggleService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-portfolio';
}
