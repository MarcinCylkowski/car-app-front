import { MainService } from "./../main.service";
import { CarDto } from "./../models/car-dto";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit, OnDestroy {
  constructor(private mainService: MainService, private router: Router) {}

  car = {
    brand: "",
    model: "",
    production: "",
    description: ""
  };
  ngOnInit() {
    this.car = this.mainService.getCarForm();
  }

  create() {
    let result: CarDto = {
      brand: this.car.brand,
      model: this.car.model,
      productionYear: this.car.production,
      describe: this.car.description
    };
    this.mainService.postCar(result).subscribe(
      car => {
     
      },
      (err: Error) => {console.log(err.message)},
      () => {
        this.back();
        this.resetForm();
      }
    );
  }

  back() {
    this.router.navigateByUrl("/home");
  }

  resetForm(): void {
    this.car = {
      brand: "",
      model: "",
      production: "",
      description: ""
    };
  }

  ngOnDestroy(): void {
    this.mainService.setCarForm(this.car);
  }
}
