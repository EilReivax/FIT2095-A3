import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats-records',
  templateUrl: './stats-records.component.html',
  styleUrls: ['./stats-records.component.css']
})
export class StatsRecordsComponent {
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
