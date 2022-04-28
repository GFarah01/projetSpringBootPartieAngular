import { CoachService } from '../../ServicesFront/coach.service';
import { Employee } from '../../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { coach } from '../../Modeles/Coach';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  coach: coach;
  constructor(private route: ActivatedRoute,private router: Router, private service :CoachService,
    private employeeService: EmployeeService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.service.getCoach(this.id)
      .subscribe(data => {
        console.log(data)
        this.coach = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['participants']);
  }
}
