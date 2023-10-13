import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats: any = {};

  constructor(private dbService: DatabaseService, private router: Router) {
    this.getStats();
  }

  getStats(){
    this.dbService.viewStats().subscribe({
      next: (data: any) => {
        this.stats = data;
      },
      error: (err) =>  {
        this.router.navigate(['/400']);
      }
    })
  }
}
