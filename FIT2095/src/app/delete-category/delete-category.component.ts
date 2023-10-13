import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {
  records: any[] = []

  constructor(private dbService: DatabaseService, private router:Router){
    this.getCategory();
  }

  getCategory(){
    this.dbService.listCategory().subscribe({
      next: (data: any) => {
        this.records = data
      },
      error: (err) =>  { this.router.navigate(['/400']) }
    })
  }

  deleteCategory(id: any){
    this.dbService.deleteCategory(id).subscribe({
      next: (data: any) => {
        this.records = data
        this.getCategory();
      },
      error: (err) =>  {
        this.router.navigate(['/400'])
      }
    })
  }
}
