import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "details/:id",
    component: DetailComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "watch-list",
    component: WatchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
