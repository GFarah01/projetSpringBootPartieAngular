import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './gestionCoach/coachdDtails/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './gestionCoach/update-employee/update-employee.component';
import { AddParticipantComponent } from './gestionCoach/add-participant/add-participant.component';
import { ListeParticipantComponent } from './gestionCoach/liste-participant/liste-participant.component';
import { DeleteCoachComponent } from './gestionCoach/delete-coach/delete-coach.component';
import { UpdateSeanceComponent } from './gestionSeance/updateSeance/update-seance/update-seance.component';
import { ListeSeancesComponent } from './gestionSeance/listeSeances/liste-seances/liste-seances.component';
import { DetailsSeanceComponent } from './gestionSeance/detailsSeance/details-seance/details-seance.component';
import { AddSeanceComponent } from './gestionSeance/addSeance/add-seance/add-seance.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    AddParticipantComponent,
    ListeParticipantComponent,
    DeleteCoachComponent,
    UpdateSeanceComponent,
    ListeSeancesComponent,
    UpdateSeanceComponent,
    DetailsSeanceComponent,
    AddSeanceComponent,
    ListeSeancesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
