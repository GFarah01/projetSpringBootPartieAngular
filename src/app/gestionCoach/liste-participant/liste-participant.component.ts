import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { coach } from 'src/app/Modeles/Coach';
import { participant } from 'src/app/Modeles/Participant';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { ParticipantService } from 'src/app/ServicesFront/participant.service';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})
export class ListeParticipantComponent implements OnInit {

  participants: Observable<any>;

  constructor(private service: ParticipantService, private s: CoachService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.s.getAllCoachs().subscribe(
         data => {console.log(data);
          this.participants = data;}
       , err => console.log(err)

    );
  }

  deleteCoach(p) {
    this.s.deleteCoach(p)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  coachDetails(id_personne){
    localStorage.setItem("idcoach", id_personne);
    this.router.navigate(['details', id_personne]);
  }

  updateCoach(id){
    this.router.navigate(['update', id]);
  }

}
