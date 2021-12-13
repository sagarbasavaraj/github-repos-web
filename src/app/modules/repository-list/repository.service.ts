import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { Repository } from './repository.model';
import { map, catchError, throwError, Observable } from 'rxjs';
import RepositoryUtils from './repository.utils';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private apiService: ApiService) {}

  /**
   * getRepositories - Fetches list of most starred Github repos that were created in the last 30 days
   * @param page Current page
   * @returns Observable<Repository[]> list of repositories
   */
  getRepositories(page: number): Observable<Repository[]> {
    const date = RepositoryUtils.getLastThirtyDaysFromGivenDate();
    let searchParams = new HttpParams();
    searchParams = searchParams
      .append('q', `created:>${date}`)
      .append('accept', 'application/vnd.github.v3+json')
      .append('sort', 'stars')
      .append('order', 'desc')
      .append('page', page);
    const url = 'https://api.github.com/search/repositories';

    return this.apiService.get(url, searchParams).pipe(
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
        return throwError(() => errorRes);
      })
    );
  }
}
