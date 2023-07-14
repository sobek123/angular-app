import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car/car/car.service';
import { Test2 } from './test2';
import { Title } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  expr: string = "text-transform: uppercase; color: yellow"
  one: string[] = ["main1", "main2"]
  title: string = "Testowy tytul"
  issueForm: FormGroup;
  test2: Test2 = new Test2();
  inputs: string[] = []
  selects: string[] = ['maslo', 'jajka','chleb', 'ryz']
  inputname: string 
  ele: object = {
    name: null,
    surname: 'rrr'
  }
  inputname2: string = 'halo'
  va: string = 'elo'

  
  textValue: string = "Input value"
  step: number = 0
  // skills: string[] = []
  isActive: boolean = true
  constructor(
    // public issueForm: FormGroup,
    private router: Router,

    private carService: CarService,
    private titleService: Title) {
    
     }

     test():any{
      return {
        name: null,
        surname: 'rrr'
      }
     }

  ngOnInit(): void {
    const el = document.getElementById("password")
    console.log(el?.dataset)
    console.log(el?.dataset.eloMelo)
    console.log(el?.dataset.nieelo)
    // el.dataset.hej = "5"

    this.titleService.setTitle($localize`${this.title}`)
      this.issueForm = new FormGroup({
          name : new FormControl('', Validators.required),
          surname: new FormControl('', Validators.required),
          age: new FormControl(0, Validators.required),
          email: new FormControl('', [Validators.required, Validators.email]),
          info: new FormControl(''),
          color: new FormControl(''),
          datetime: new FormControl(''),
          date: new FormControl(''),
          url: new FormControl(''),
          file: new FormControl(''),
          number: new FormControl(''),
          datetimelocal: new FormControl(''),
          password: new FormControl(''),
          image: new FormControl(''),
          time: new FormControl(''),
          tel: new FormControl(''),
          radio: new FormControl(false),
          range: new FormControl(''),
          month: new FormControl(''),
          week: new FormControl(''),
          inputname: new FormControl(''),

          mat: new FormControl('',Validators.required),
          mat2: new FormControl('',Validators.required),
          dat: new FormControl(''),
          checkbox: new FormControl(''),
          search: new FormControl(''),
          address: new FormGroup({
            street: new FormControl('',Validators.required),
            country: new FormControl('',Validators.required),
            postCode: new FormControl('',Validators.required),
          })
          // skills: new FormArray([])
      })
  }

  show(){
    console.log(this.inputname)
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.issueForm.controls[controlName].hasError(errorName);
    }

  submitForm(){
    // console.log(this.issueForm.get('address')?.get('street'))
    // document.ge
    if(this.issueForm.invalid) return false
    else{
    console.log(this.issueForm.value)
    // console.log(this.issueForm.value.dat | date)
    // console.log(this.test2)
    // this.carService.saveCar(this.test2).subscribe( res => {
    //   // this.router.navigate(['/strona1'])
    //   console.log(res)
    // }, error => {console.log(error)})
    
    this.router.navigate(['/strona',32], 
  //   {state:{ data:{
  //     car: {
  //       brand: "BMW",
  //       model: "M3",
  //       km: 444
  //     }, 
  // }}},
  {queryParams: {sort: "asc"}})
    return
  }
}

  update(){
    this.issueForm.setValue({
      name : 'Mac',
      surname: 'Sob',
      age: 22,
      email: 'macieksoe@wp.pl',
      address: {
        street: 'Pogodna',
        country: 'Polska',
        postCode: '14-999'
      }
      // skills: ['rowerzysta']
    })
  }

  updateF(){
    this.issueForm.patchValue({
      name : 'Mac',
      surname: 'Sob',
      age: 22
      
    })
  }

  addInput(ine: string){
    this.inputs.push(ine)
    let el = document.getElementById("witam")
    // if(el!= null){
    //   el.style.color = 'red'
    // }

    el != null ? el.style.color = 'red' : ''
    // const el2 = el?. ?? ''
  }

  addSkill(skill: HTMLInputElement){
    
    (this.issueForm.get('skills') as FormArray).push(
      new FormControl(skill.value)
    )
    console.log(skill.value)
  }

  
}
