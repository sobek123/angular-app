import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "./car";

@Injectable({
    providedIn: 'root'
})
export class CarService{

    url = 'http://localhost:8080/cars'

    constructor(private httpClient: HttpClient){}

    getCars(): Observable<Car>{
        return this.httpClient.get(`${this.url}`)
    }

    getCar(id: number): Observable<Object>{
        return this.httpClient.get(`${this.url}/${id}`)
    }
    
    saveCar(car: Car): Observable<Car>{
        return this.httpClient.post(`${this.url}`, car)
    }

    deleteCar(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.url}/${id}}`)
    }

    editCar(id: number, car: Car): Observable<Car>{
        return this.httpClient.put(`${this.url}/${id}`, car)
    }

}