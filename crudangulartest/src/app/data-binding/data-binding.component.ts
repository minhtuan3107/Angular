import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // Interpolation
  name = "Interpolation";

  // Property binding
  flag = true;

  // Event binding
  setFlag(){
    this.flag = !this.flag
  }

  //Two-way binding
  address : string = "Two-way binding"
}
