import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CountryComponent } from './country/country.component';
import { DisconectedComponent } from './disconected/disconected.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: 'country/:name',
    component: CountryComponent
  },
  {
    path: 'disconected',
    component: DisconectedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
