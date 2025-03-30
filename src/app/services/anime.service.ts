import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getTopAnime(length: number = 10): Observable<any> {
    return this.http
      .get<{ data: any[] }>(`${environment.apiUrl}/top/anime`)
      .pipe(
        map(
          (response) =>
            response.data
              ?.sort((a, b) => (a.rank || 0) - (b.rank || 0))
              .slice(0, length) || []
        ),
        catchError((error) => {
          console.error('Error getting top anime', error);
          return throwError(() => new Error('Failed to fetch top anime'));
        })
      );
  }

  getAnimeDetails(id: string): Observable<any> {
    return this.http
      .get<{ data: object }>(`${environment.apiUrl}/anime/${id}`)
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          console.error('Error getting anime details', error);
          return throwError(() => new Error('Failed to fetch anime details'));
        })
      );
  }
}
