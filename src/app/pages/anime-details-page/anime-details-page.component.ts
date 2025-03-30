import { Component, inject, Input, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-anime-details-page',
  templateUrl: './anime-details-page.component.html',
  styleUrl: './anime-details-page.component.scss',
})
export class AnimeDetailsPageComponent implements OnInit {
  @Input() animeDetails: any = {};
  animeService: AnimeService = inject(AnimeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  sanitizer: DomSanitizer = inject(DomSanitizer);
  animeId: string = '';
  safeTrailerUrl!: SafeResourceUrl;

  constructor() {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.animeId = params.get('id')!;
      this.fetchAnimeDetails();
    });
  }

  fetchAnimeDetails() {
    if (!this.animeId) return;
    this.animeService.getAnimeDetails(this.animeId).subscribe({
      next: (data) => {
        this.animeDetails = data;
        this.sanitizeTrailerUrl();
      },
      error: (err) => console.error(err),
    });
  }

  sanitizeTrailerUrl() {
    if (this.animeDetails?.trailer?.embed_url) {
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.animeDetails.trailer.embed_url
      );
    }
  }
}
