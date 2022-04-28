import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { coach } from '../../Modeles/Coach';
import { CoachService } from '../../ServicesFront/coach.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  coach1 : any;

  constructor(private route: ActivatedRoute,private router: Router, private s: CoachService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
   // this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    // this.router.navigate(['update', this.id]);
    this.s.getCoach(this.id)
      .subscribe(data => {
        console.log(data)
        this.coach1 = data;
      }, error => console.log(error));
  }

  updateCoach() { //un autre constructeur qui va contenir l'id
    // this.id = this.route.snapshot.params['id'];
    // this.router.navigate(['update', this.id]);
    this.s.updateCoach(this.coach1)
      .subscribe(data => {
        this.coach1 = data;
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCoach();
  }

  gotoList() {
    this.router.navigate(['/participants']);
  }
}
