import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  eventId: string = '';
  name: string = '';
  capacity: number = 0;

  constructor(public dbService: DatabaseService, private router:Router) { }

  updateEvent(){
    let eventObj = {
      eventId: this.eventId,
      name: this.name,
      capacity: this.capacity,
    };

    this.dbService.updateEvent(eventObj).subscribe({
      next:(result) => {this.router.navigate(['/list-event']);},
      error: (error) => { 
        this.router.navigate(['/400']);
      }
    })
  }

}
