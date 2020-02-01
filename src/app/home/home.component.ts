import { Router } from '@angular/router';
import { CarDto } from "./../models/car-dto";
import { MainService } from "./../main.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  greet: string = "Hello World!";
  date: Date = new Date();
  cars: Array<CarDto> = new Array<CarDto>();
  flag: boolean = false;

  constructor(public mainService: MainService, private router: Router) {}

  ngOnInit() {
    console.log("HomeComponent ngOnInit");
    this.getCars();
  }


  getCars() {
    this.cars = [];
    this.mainService.getCars().subscribe(json => {
      console.log(json);
      json.map(c => {
        this.cars.push(c);
      });
    });
  }

  delete(id: number) {
    this.mainService.deleteCar(id).subscribe(
      (response: Response) => {
        
        this.back2();
      },
      (err: Error) => {console.log(err.message)},
      () => { 
      }
    );
  }

  getInputs() {
    if (!this.flag) {
      this.flag = true;
    } else {
      this.flag = true;
    }
  }

  update(id: number, car: CarDto): void {
    this.mainService.putCar(id, car).subscribe(
      car => {
        
      },
      (err: Error) => {
        console.log(err.message);
      },
      () => {
        this.getCars();
        this.flag = false;
        this.back();
      }
    );
  }

  back() {
    this.router.navigateByUrl("/home");
  }

  back2() {
    this.router.navigateByUrl("/create");
  }

 
}
