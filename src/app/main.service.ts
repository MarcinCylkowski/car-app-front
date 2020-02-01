import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from './models/car-dto';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  counter: number = 0;

  carForm = {
    brand: "",
    model: "",
    production: "",
    description: ""
  }

  constructor(private http: HttpClient) { }

  getCars(): Observable<Array<CarDto>> {
    return this.http.get<Array<CarDto>>('http://localhost:8060/api/cars');
  }

  putCar(id: number, car: CarDto) {
   return this.http.put('http://localhost:8060//api/cars/put/' + id, car);
  }

  postCar(car: CarDto) {
    console.log(car);
    return this.http.post('http://localhost:8060/api/cars',car );
  }

  setCarForm(car: any) {
    this.carForm = car;
  }

  getCarForm(): any {
    return this.carForm;
  }

  deleteCar(id: number) {
    return this.http.delete('http://localhost:8060/api/cars/delete/' + id);
  }

}
