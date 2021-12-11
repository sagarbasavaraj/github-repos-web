import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css'],
})
export class RepositoryItemComponent implements OnInit {
  @Input() repository: Repository | undefined;

  constructor() {}

  ngOnInit(): void {}
}
