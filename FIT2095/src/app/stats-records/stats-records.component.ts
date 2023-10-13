import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-stats-records',
  templateUrl: './stats-records.component.html',
  styleUrls: ['./stats-records.component.css']
})
export class StatsRecordsComponent {
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
