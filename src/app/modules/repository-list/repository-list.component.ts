import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[] = [];
  page: number = 0;
  error: any;
  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  onScroll() {
    this.getRepositories();
  }

  getRepositories() {
    this.repositoryService.getRepositories(++this.page).subscribe({
      next: (value: Repository[]) => {
        this.repositories = [...this.repositories, ...value];
      },
      error: (error: any) => {
        this.error = error;
      },
    });
  }

  clearError() {
    this.error = null;
  }
}
