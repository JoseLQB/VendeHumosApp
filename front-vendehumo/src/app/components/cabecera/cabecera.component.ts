import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  formLogin: FormGroup;
  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  login(): void{
  }
  logout(): void{
  }
  goRegistro(): void{

  }

}
