import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  records: any[] = []

  constructor(private dbService: DatabaseService) {
    this.getEvent();
  }

  getEvent(){
    this.dbService.listEvent().subscribe({
      next: (data: any) => {
        this.records = data
      },
      error: (err) =>  { }
    })
  }
}
