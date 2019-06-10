import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';
import { CalendarComponent } from '../app/calendar/calendar.component';
import { MenuComponent } from '../app/menu/menu.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
