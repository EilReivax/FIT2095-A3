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

  createCategory(category: any){
    return this.http.post("/api/v1/category/32528558/add", category, httpOptions);
  }

  deleteCategory(id: any){
    return this.http.delete("/api/v1/category/32528558/delete", {body: {categoryId: id}, headers: httpOptions.headers});
  }

  updateCategory(category: any){
    return this.http.put("/api/v1/category/32528558/edit", category, httpOptions);
  }

  viewCategory(id: any){
    let url = "/api/v1/category/32528558/view/" + id
    return this.http.get(url, {headers: httpOptions.headers});
  }

  listEvent(){
    return this.http.get("/api/v1/event/michael/view-all");
  }

  createEvent(event: any){
    return this.http.post("/api/v1/event/michael/add", event, httpOptions);
  }

  deleteEvent(id: any){
    return this.http.delete("/api/v1/event/michael/delete", {body: {eventId: id}, headers: httpOptions.headers});
  }

  updateEvent(event: any){
    return this.http.put("/api/v1/event/michael/edit", event, httpOptions);
  }

  viewEvent(id: any){
    return this.http.get("/api/v1/event/michael/view", {headers: httpOptions.headers});
  }

  viewStats() {
    return this.http.get("/api/v1/stats");
  }
}
