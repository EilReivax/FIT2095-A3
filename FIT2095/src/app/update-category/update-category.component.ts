import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id: string = '';
  name: string = '';
  description: string = '';

  constructor(public dbService: DatabaseService, private router:Router) { }

  updateCategory(){
    let categoryObj = {
      categoryId: this.id,
      name: this.name,
      description: this.description,
    };

    this.dbService.updateCategory(categoryObj).subscribe({
      next:(result) => {this.router.navigate(['/list-category']);},
      error: (error) => {
        console.log(error);
      }
    })
  }
}
