import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  category: any = {};
  events: any[] = []

  constructor(private dbService: DatabaseService, private route: ActivatedRoute) {
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.viewCategory(categoryId);
  }

  viewCategory(id: any){
    this.dbService.viewCategory(id).subscribe({
      next: (data: any) => {
        this.category = data.category;
        this.events = data.events;
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
