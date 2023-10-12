import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  listCategory(){
    return this.http.get("/api/v1/category/32528558/view-all");
  }

  listEvent(){
    return this.http.get("/api/v1/event/michael/view-all");
  }
}
