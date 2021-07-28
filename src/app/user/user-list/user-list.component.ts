import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDatasource } from '../user-datasource';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  pageTitle: string = "User List";
  columnsToDisplay: string[] 
    = [ 'id', 'username', 'firstname', 'lastname', 'phone', 'email', 'isReviewer', 'isAdmin', 'action' ];
  dataSource!: UserDatasource;
  length: number = 3;
  pageSize: number = 1;
  pageSizeOptions: number[] = [1, 3, 5, 7];
  showFirstLastButtons: boolean = true;
  detailBtn!: MatButton;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(
    private usersvc: UserService
    ) { 
    this.dataSource = new UserDatasource(usersvc);
  }

  ngOnInit(): void {
    // this.usersvc.list().subscribe(
    //   res => { console.debug(res); this.users = res as User[]; },
    //   err => { console.error(err); }
    // );
  }

}
