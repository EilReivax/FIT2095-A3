import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  records: any[] = []

  constructor(private dbService: DatabaseService, private router: Router) {
    this.getEvent();
  }

  getEvent(){
    this.dbService.listEvent().subscribe({
      next: (data: any) => {
        this.records = data
      },
      error: (err) =>  { this.router.navigate(['/400']) }
    })
  }

  deleteEvent(id: any){
    this.dbService.deleteEvent(id).subscribe({
      next: (data: any) => {
        this.records = data
        this.getEvent();
      },
      error: (err) =>  {
        this.router.navigate(['/400'])
      }
    })
  }

  getEndDate(date: Date, duration: number) {
    let newDate = new Date(date);
    return new Date(newDate.getTime() + duration * 60000)
  }

  getHours(duration: number) {
    return Math.round(duration / 6) / 10 + " Hour(s)"
  }

  getCategories(categoryList: any[]) {
    let categories = "";
    for (let i = 0; i < categoryList.length; i++) {
      if (i == categoryList.length - 1) {
        categories += categoryList[i].categoryId;
      } else {
        categories += categoryList[i].categoryId + ", ";
      }
    }
    return categories;
  }
}
