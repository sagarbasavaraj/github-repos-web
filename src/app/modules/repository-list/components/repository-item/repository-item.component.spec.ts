import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Repository } from '../../repository.model';

import { RepositoryItemComponent } from './repository-item.component';

describe('RepositoryItemComponent', () => {
  let component: RepositoryItemComponent;
  let fixture: ComponentFixture<RepositoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryItemComponent);
    component = fixture.componentInstance;
    component.repository = new Repository(
      'test',
      'http://test/avatar',
      'wewe',
      'dasd',
      1000,
      12
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render repository', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component).toBeTruthy();
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
