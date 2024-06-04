import { Component } from '@angular/core';
import {ChildComponentComponent} from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [
    ChildComponentComponent
  ],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  Counter = 5;

  increment(){
    this.Counter++
  }
  decrement(){
    this.Counter--
  }
}
