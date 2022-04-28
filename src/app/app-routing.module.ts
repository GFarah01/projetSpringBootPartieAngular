import { ListeSeancesComponent } from './gestionSeance/listeSeances/liste-seances/liste-seances.component';
import { AddParticipantComponent } from './gestionCoach/add-participant/add-participant.component';
import { ListeParticipantComponent } from './gestionCoach/liste-participant/liste-participant.component';
import { EmployeeDetailsComponent } from './gestionCoach/coachdDtails/employee-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './gestionCoach/update-employee/update-employee.component';
import { AddSeanceComponent } from './gestionSeance/addSeance/add-seance/add-seance.component';
import { UpdateSeanceComponent } from './gestionSeance/updateSeance/update-seance/update-seance.component';
import { DetailsSeanceComponent } from './gestionSeance/detailsSeance/details-seance/details-seance.component';

const routes: Routes = [
  { path: '', redirectTo: 'participants', pathMatch: 'full' },
  //{ path: 'employees', component: EmployeeListComponent },
  //{ path: 'add', component: CreateEmployeeComponent },

  { path: 'participants', component: ListeParticipantComponent },
  { path: 'addParticipant', component: AddParticipantComponent },
   { path: 'update/:id', component: UpdateEmployeeComponent },
   { path: 'details/:id', component: EmployeeDetailsComponent },

   { path: 'seance/seances', component: ListeSeancesComponent },
   { path: 'seance/addSeance', component: AddSeanceComponent },
   { path: 'seance/update/:id', component: UpdateSeanceComponent },
   { path: 'seance/details/:id', component: DetailsSeanceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
