import { TestBed } from '@angular/core/testing';
import RepositoryUtils from './repository.utils';

describe('RepositoryUtils', () => {
  it('getDate - Should return last 30 days', () => {
    expect(RepositoryUtils.getDate()).toBe('2021-11-12');
  });
});
