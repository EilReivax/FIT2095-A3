import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats: any = {};

  constructor(private dbService: DatabaseService) {
    this.getStats();
  }

  getStats(){
    this.dbService.viewStats().subscribe({
      next: (data: any) => {
        this.stats = data;
      },
      error: (err) =>  {
        console.log(err);
      }
    })
  }
}
