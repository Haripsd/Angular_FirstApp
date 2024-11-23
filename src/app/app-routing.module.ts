import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { ContactCardComponent } from './component/contact-card/contact-card.component';
import { ContactdetailsbyIdComponent } from './component/contactdetailsby-id/contactdetailsby-id.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contacts', component:ContactDetailsComponent},
  {path: 'contacts/:id', component:ContactdetailsbyIdComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
