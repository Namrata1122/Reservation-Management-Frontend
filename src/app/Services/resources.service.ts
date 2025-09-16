import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ResourcesService{
    http:HttpClient = inject(HttpClient);

    private apiUrl = 'http://localhost:3000/resources';
    GetResourcesList():Observable<any>{
        return this.http.get(this.apiUrl);
    }

    // admin-crud operations
    CreateResource(data:any):Observable<any>{
        return this.http.post(this.apiUrl,data);
    }

    DeleteResource(id:string):Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    UpdateResource(id:string,data:any):Observable<any>{
        return this.http.put(`${this.apiUrl}/${id}`,data);
    }
}