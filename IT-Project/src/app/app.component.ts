import { Component } from '@angular/core';
import  sqlQuery  from './sql_query.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'IT-Project';

 sqlQueryData: any = sqlQuery;


}
