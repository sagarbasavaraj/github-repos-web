import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Repository } from './repository.model';
import { RepositoryService } from './repository.service';
import { of } from 'rxjs';

import { RepositoryListComponent } from './repository-list.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;
  let repositories: any[];
  let mockRepositoryService = {
    getRepositories: () => of(repositories),
  };

  beforeEach(async () => {
    repositories = [
      new Repository('test', 'http://test/avatar', 'wewe', 'dasd', 1000, 12),
    ];
    spyOn(mockRepositoryService, 'getRepositories').and.returnValue(
      of(repositories)
    );

    await TestBed.configureTestingModule({
      declarations: [RepositoryListComponent, RepositoryItemComponent],
      providers: [
        { provide: RepositoryService, useValue: mockRepositoryService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of github repos', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.repositories.length).toBe(1);
    expect(compiled.querySelector('.avatar')).toBeDefined();
    expect(compiled.querySelector('.text-capitalize')?.textContent).toContain(
      'wewe'
    );
    expect(compiled.querySelector('.bg-info')?.textContent).toContain(
      'Stars : 1000'
    );
    expect(compiled.querySelector('.bg-danger')?.textContent).toContain(
      'Issues : 12'
    );
  });
});
