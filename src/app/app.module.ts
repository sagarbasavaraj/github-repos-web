import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RepositoryListModule } from './modules/repository-list/repository-list.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RepositoryListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
