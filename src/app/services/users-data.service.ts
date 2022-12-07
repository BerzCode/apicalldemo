import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  // Assigned API url To call an API
  url ="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
  // GET method used
  users()
  {
    return this.http.get(this.url);
  }
  // POST method used
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }

}
 