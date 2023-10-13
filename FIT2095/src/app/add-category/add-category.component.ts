import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  name: string = '';
  description: string = '';
  image: string = '';

  constructor(public dbService: DatabaseService, private router:Router) { }

  saveCategory(){
    let categoryObj = {
      name: this.name,
      description: this.description,
      image: this.image
    };

    this.dbService.createCategory(categoryObj).subscribe({
      next:(result) => {this.router.navigate(['/list-category']);},
      error: (error) => {
        console.log(error);
      }
    })
  }

}
