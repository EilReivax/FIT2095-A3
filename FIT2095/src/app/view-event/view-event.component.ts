import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent {
  event: any = {};

  constructor(private dbService: DatabaseService, private route: ActivatedRoute) {
    let eventId = this.route.snapshot.paramMap.get('id');
    this.viewEvent(eventId);
  }

  viewEvent(id: any){
    this.dbService.viewEvent(id).subscribe({
      next: (data: any) => {
        this.event = data;
      },
      error: (err) =>  { }
    })
  }

  getEndDate(date: Date, duration: number) {
    let newDate = new Date(date);
    return new Date(newDate.getTime() + duration * 60000)
  }

  getHours(duration: number) {
    return Math.round(duration / 6) / 10 + "Hour(s)"
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
