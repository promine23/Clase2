import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  text = 'Contador';

  contador = 1;

  increment(){
    this.contador ++;
  }
  
  decrement(){
    this.contador --;
  }
}
