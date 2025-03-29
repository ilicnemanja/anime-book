import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anime-card-item',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './anime-card-item.component.html',
  styleUrl: './anime-card-item.component.scss',
})
export class AnimeCardItemComponent {
  @Input() anime: any = {};
}
