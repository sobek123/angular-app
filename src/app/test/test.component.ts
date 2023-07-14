import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from '../car/car/car.service';
import { Car } from '../car/car/car';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() text = ''
  cars: Car[]
  id: number
  car: Car
  custom: string = "Custom string"
  val: number = 55
  url: string = "Elo"
  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => this.id = res.id)
    this.route.paramMap.subscribe(value => {
      const id = value.get("id")
      console.log(id)
    })
    console.log(history.state.data)
    this.route.queryParamMap.subscribe(value => {
      const order = value.get("order")
      const page = value.get("page")
    })
    this.route.data.subscribe(val => console.log(val))
    this.carService.getCars().subscribe(res => this.cars = res)
    // this.carService.getCar(this.id).subscribe(data => this.car = data, error => console.log(error))
    // console.log(this.router.getCurrentNavigation().extras.state)
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  deleteCar(id: number){
    this.carService.deleteCar(id)
    this.carService.getCars().subscribe(res => this.cars = res)
  }

  updateCar(car: Car){
    this.carService.editCar(3, car).subscribe(data => this.router.navigate(['/strona']), error => console.log(error))
  }

  saveCar(car: Car){
    this.carService.saveCar(car).subscribe(data => this.router.navigate(['/strona']),error => console.log(error))
  }



}
