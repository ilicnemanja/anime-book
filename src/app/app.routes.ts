import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { MangaPageComponent } from './pages/manga-page/manga-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { AnimeDetailsPageComponent } from './pages/anime-details-page/anime-details-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    title: 'Anime Book | Home',
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsPageComponent,
    title: 'Anime Book | News',
  },
  {
    path: 'sign-in',
    pathMatch: 'full',
    component: SignInPageComponent,
    title: 'Anime Book | Sign In',
  },
  {
    path: 'sign-up',
    pathMatch: 'full',
    component: SignUpPageComponent,
    title: 'Anime Book | Sign Up',
  },
  {
    path: 'anime',
    pathMatch: 'full',
    component: AnimePageComponent,
    title: 'Anime Book | Anime Movies & Series',
  },
  {
    path: 'manga',
    pathMatch: 'full',
    component: MangaPageComponent,
    title: 'Anime Book | Manga Books',
  },
  {
    path: 'genres',
    pathMatch: 'full',
    component: GenresPageComponent,
    title: 'Anime Book | Genres',
  },
  {
    path: 'anime/:id',
    pathMatch: 'full',
    component: AnimeDetailsPageComponent,
    title: 'Anime Book | Anime Details',
  },
];
