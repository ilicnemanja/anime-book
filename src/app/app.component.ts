import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'anime-book';
}
