import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  name: string = '';
  description: string = '';
  image: string = '';
  date: Date = new Date();
  duration: number = 0;
  isActive: boolean = false;
  capacity: number = 0;
  availability: number = 0;
  categoriesId: string = '';

  constructor(public dbService: DatabaseService, private router:Router) { }

  saveEvent(){
    let categoryObj = {
      name: this.name,
      description: this.description,
      image: this.image,
      date: this.date,
      duration: this.duration,
      isActive: this.isActive,
      capacity: this.capacity,
      availability: this.availability,
      categoriesId: this.categoriesId
    }

    this.dbService.createEvent(categoryObj).subscribe({
      next:(result) => {this.router.navigate(['/list-event']);},
      error: (error) => {
        console.log(error);
      }
    })
  }

}
