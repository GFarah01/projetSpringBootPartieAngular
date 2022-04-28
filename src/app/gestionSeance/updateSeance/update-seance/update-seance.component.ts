import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { seance } from 'src/app/Modeles/seance';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { SeanceService } from 'src/app/ServicesFront/seance.service';
// import {SidebarModule } from 'cdbangular';

@Component({
  selector: 'app-update-seance',
  templateUrl: './update-seance.component.html',
  styleUrls: ['./update-seance.component.css']
})
export class UpdateSeanceComponent implements OnInit {


  id: number;
  seance1: any;
  coach1 : any;

  constructor(private route: ActivatedRoute,private router: Router, private s: CoachService,
    private service: SeanceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // this.router.navigate(['update', this.id]);
    this.service.getSeance(this.id)
      .subscribe(data => {
        console.log(data)
        this.seance1 = data;
      }, error => console.log(error));
  }

  updateSeance() {
    // this.id = this.route.snapshot.params['id'];
    // this.router.navigate(['update', this.id]);
    this.service.updateSeance(this.seance1)
      .subscribe(data => {
        this.seance1 = data;
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSeance();
  }

  gotoList() {
    this.router.navigate(['/seance/seances']);
  }

}
