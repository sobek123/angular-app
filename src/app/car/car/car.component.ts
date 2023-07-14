import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Test2 } from 'src/app/test2/test2';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() text: string = "";
  @Output() bClick = new EventEmitter();
  @Output() counter: number = 0;
  
  @Input() test = new Test2();
  @Input() func = () => function(){};
  items:number[] = [12,3,4,5];
  condition:boolean = 2 > 3;
  condition2:boolean = true;

  constructor(private fb: FormBuilder, private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
    const g = document.querySelector("p[title='elo']")
    console.log(g)
  }

  // public getAllEmloyees(): Observable<Employee[]>{
  //   return this.http.get<Employee[]>(`${this.apiServer}/employees`)

  // }

  // public addEmployee(employee: Employee): Observable<Employee>{
  //   return this.http.post(`${this.apiServer}/emplyee/add`)
  // }
  onClick(){
    this.bClick.
    emit()
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }

  updateName(){
    this.name.setValue("Elo")
  }

  updateProfile(){
    this.profileForm.setValue(
      {
        firstName: 'Maciek',
        lastName: 'Sob',
        address: {
          city: 'Białystok',
          street: "Kaczor",
          state: '232r',
          zip: 'zip'
        }
      }
    )
  }

  name = new FormControl('')

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })

  prof = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      street: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })
}
