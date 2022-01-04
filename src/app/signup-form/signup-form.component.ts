import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log({form})

  }
}
