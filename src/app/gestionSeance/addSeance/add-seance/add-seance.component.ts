import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { coach } from 'src/app/Modeles/Coach';
import { seance } from 'src/app/Modeles/seance';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { SeanceService } from 'src/app/ServicesFront/seance.service';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {
  seance1 : seance;
  coach1 : coach;
  form : any;
  submitted = false;
  coachs : coach[] = [];
  constructor(private service: SeanceService, private router: Router,
    private servicecoach: CoachService,) { }

  ngOnInit() {this.servicecoach.getAllCoachs().subscribe(data => {
    this.coachs = data;
    console.log("data: ", data);
    this.gotoList();
  }, err => console.log(err)
  );}

  // getAllCoachs()
  // {

  // }

  getAllpart()
  {
    this.service.getAllSeances().subscribe(data => {
      console.log("data: ", data);
      this.gotoList();
    }, err => console.log(err)
    );
  }

  save(addseance: NgForm) {
    this.service.createSeance(addseance.value).subscribe(data => {
      console.log(data);
     // this.employee = new Employee();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.getAllpart();
  }

  gotoList() {
    this.router.navigate(['/seance/seances']); // /participants
  }

}
