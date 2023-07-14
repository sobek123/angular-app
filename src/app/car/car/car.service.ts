import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "./car";

@Injectable({
    providedIn: 'root'
})
export class CarService{

    url = 'http://localhost:8080/cars'

    constructor(private httpClient: HttpClient){}

    httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getCars(): Observable<Car[]>{
        return this.httpClient.get<Car[]>(`${this.url}`)
    }

    getCar(id: number): Observable<Car>{
        return this.httpClient.get<Car>(`${this.url}/${id}`)
    }
    
    saveCar(car: Car): Observable<Car>{
        return this.httpClient.post<Car>(`${this.url}`, car, this.httpHeaders)
    }

    deleteCar(id: number): void{
        this.httpClient.delete(`${this.url}/${id}}`)
    }

    editCar(id: number, car: Car): Observable<Car>{
        return this.httpClient.put<Car>(`${this.url}/${id}`, car)
    }

}