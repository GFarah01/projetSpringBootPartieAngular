import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { coach } from 'src/app/Modeles/Coach';
import { seance } from 'src/app/Modeles/seance';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { SeanceService } from 'src/app/ServicesFront/seance.service';

@Component({
  selector: 'app-details-seance',
  templateUrl: './details-seance.component.html',
  styleUrls: ['./details-seance.component.css']
})
export class DetailsSeanceComponent implements OnInit {

  id: number;
  coach: coach;
  seance1: seance;
  constructor(private route: ActivatedRoute,private router: Router, private service2 :CoachService,
    private service: SeanceService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.service.getSeance(this.id)
      .subscribe(data => {
        console.log(data)
        this.seance1 = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['seance/seances']);
  }
}
