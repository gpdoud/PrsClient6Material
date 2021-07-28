import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { Observable, of } from "rxjs";
import { User } from "./user.class";
import { UserService } from "./user.service";

export class UserDatasource implements DataSource<User> {

    users!: User[];
    paginator!: MatPaginator;

    connect(): Observable<User[]> {
        return this.usersvc.list();
    }
    disconnect(): void {
    }
    constructor(
        private usersvc: UserService
    ) {}
}
