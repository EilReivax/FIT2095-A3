import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  records: any[] = []

  constructor(private dbService: DatabaseService) {
    this.getCategory();
  }

  getCategory(){
    this.dbService.listCategory().subscribe({
      next: (data: any) => {
        this.records = data
      },
      error: (err) =>  { }
    })
  }
}
