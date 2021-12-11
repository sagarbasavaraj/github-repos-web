import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Repository } from './repository.model';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getRepositories(page: number) {
    let last_30_days = this.getDate();
    let searchParams = new HttpParams();
    searchParams = searchParams
      .append('q', `created:>${last_30_days}`)
      .append('accept', 'application/vnd.github.v3+json')
      .append('sort', 'stars')
      .append('order', 'desc')
      .append('page', page);
    const url = 'https://api.github.com/search/repositories';

    return this.http.get(url, { params: searchParams }).pipe(
      map((responseData: any) => {
        const repositories: Repository[] = [];
        for (const repo of responseData.items) {
          repositories.push(
            new Repository(
              repo.owner.login,
              repo.owner.avatar_url,
              repo.name,
              repo.description,
              repo.stargazers_count,
              repo.open_issues_count
            )
          );
        }
        return repositories;
      }),
      catchError((errorRes) => {
        return throwError(() => new Error(errorRes.message));
      })
    );
  }

  getDate() {
    let date = new Date();
    date = new Date(
      new Date(date.setDate(date.getDate() - 30))
        .toLocaleDateString()
        .replace(/\//g, '-')
    );
    const year = date.getFullYear();
    //if single digit append 0
    //slice -2 ensures we take last 2 digit
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const last_30_days = year + '-' + month + '-' + day;
    return last_30_days;
  }
}
