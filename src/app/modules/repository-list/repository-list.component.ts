import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository.model';
import { LoggerService } from '../../core/services/logger.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[] = [];
  page: number = 0;
  error: any;
  loading: boolean = false;
  constructor(
    private repositoryService: RepositoryService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  //on scroll callback
  //on scroll end this will be called and gets next page of data
  onScroll() {
    this.getRepositories();
  }

  //get list of repositories
  //Currently github API version 3 limits unauthenticated request of 10 andafter that we receive error.
  getRepositories() {
    this.loading = true;
    this.repositoryService.getRepositories(++this.page).subscribe({
      next: (value: Repository[]) => {
        this.repositories = [...this.repositories, ...value];
        this.loading = false;
      },
      error: (error: any) => {
        this.error = error;
        this.loading = false;
        this.loggerService.error(error);
      },
    });
  }

  clearError() {
    this.error = null;
  }
}
