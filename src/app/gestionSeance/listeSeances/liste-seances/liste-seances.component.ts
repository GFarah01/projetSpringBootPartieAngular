import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { SeanceService } from 'src/app/ServicesFront/seance.service';

@Component({
  selector: 'app-liste-seances',
  templateUrl: './liste-seances.component.html',
  styleUrls: ['./liste-seances.component.css']
})
export class ListeSeancesComponent implements OnInit {

  seances: Observable<any>;

  constructor(private service: SeanceService, private s: CoachService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.service.getAllSeances().subscribe(
         data => {console.log(data);
          this.seances = data;}
       , err => console.log(err)

    );
  }

  deleteSeance(p) {
    this.service.deleteSeance(p)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  seanceDetails(id_personne){
   // localStorage.setItem("idcoach", id_personne);
    this.router.navigate(['seance/details', id_personne]);
  }

  updateSeance(id){
    //this.router.navigate(['update', id]);
    console.log(id)
    this.router.navigate(['seance/update', id]);
   // seance/update/:id
  }


}
