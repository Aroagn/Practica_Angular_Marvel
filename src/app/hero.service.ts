import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Result, Hero } from './hero';

@Injectable({ providedIn: 'root' })

export class HeroService {

  private api_url = 'https://gateway.marvel.com/v1/public/characters'
  private key = '?ts=1&apikey=23830d5f75c8342d8a533a2fa9f1be96&hash=6e165e6ccb11da11e75059f211880f16';  // URL to web api
  private heroesURL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23830d5f75c8342d8a533a2fa9f1be96&hash=6e165e6ccb11da11e75059f211880f16';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<Result[]>(this.heroesURL);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.api_url}/${id}${this.key}`;
    return this.http.get<Hero>(url);
  }

  searchHeroes(term: string): Observable<Result[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Result[]>(`${this.api_url}?name=${term}${this.key}`);
  }
}
