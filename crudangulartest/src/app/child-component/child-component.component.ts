import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() count: number | undefined;
  @Output() sum: number = 0;

  increment() {
    this.sum--
  }

  decrement() {
    this.sum++
  }
}
