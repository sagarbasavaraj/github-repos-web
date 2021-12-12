import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RepositoryListRoutingModule } from './repository-list-routing.module';
import { RepositoryListComponent } from './repository-list.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    RepositoryListComponent,
    RepositoryItemComponent,
    ToastComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RepositoryListRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
})
export class RepositoryListModule {}
