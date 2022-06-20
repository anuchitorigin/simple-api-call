import { Component, OnInit } from '@angular/core';
import { UsersCrudService } from 'src/app/services/users-crud.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  Users: any = [];

  constructor(private crudService: UsersCrudService) { }

  ngOnInit(): void {
    this.crudService.GetUsers().subscribe(res => {
      console.log(res)
      this.Users = res;
    });   
  }

  delete(id:any, i:any) {
  //   console.log(id);
  //   if(window.confirm('Do you want to go ahead?')) {
  //     this.crudService.deleteBook(id).subscribe((res) => {
  //       this.Books.splice(i, 1);
  //     })
  //   }
  }

}
