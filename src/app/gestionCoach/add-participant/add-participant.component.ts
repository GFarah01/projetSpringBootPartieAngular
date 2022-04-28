import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { coach } from 'src/app/Modeles/Coach';
import { participant } from 'src/app/Modeles/Participant';
import { CoachService } from 'src/app/ServicesFront/coach.service';
import { ParticipantService } from 'src/app/ServicesFront/participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

   // employee: participant = new participant();
  participant : any;
  coach : coach;
  form : any;
  submitted = false;

  constructor(private service: CoachService, private router: Router) { }

  ngOnInit() {}

  // newEmployee(): void {
  //   this.submitted = false;
  //   this.employee = new Employee();
  // }

  getAllpart()
  {
    this.service.getAllCoachs().subscribe(data => {
      console.log("data: ", data);
      this.gotoList();
    }, err => console.log(err)
    );
  }

  save(addcoach: NgForm) {
    this.service.createCoach(addcoach.value).subscribe(data => {
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
    this.router.navigate(['/participants']);
  }

}
