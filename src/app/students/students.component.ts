import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  httpData:any;
  constructor(public usersServiceObj:UserService){}

  ngOnInit():void{
    this.usersServiceObj.getUsers()
    .subscribe((users)=> {
      this.httpData=users;
      console.log(this.httpData);
    })
}
}