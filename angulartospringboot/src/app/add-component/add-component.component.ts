import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import Swal from "sweetalert2";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-component',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-component.component.html',
  styleUrl: './add-component.component.css'
})
export class AddComponentComponent {
  constructor(private service: ProductServiceService, private route: ActivatedRoute, private router: Router) {
  }

  typeProduct: any
  type: any

  ngOnInit() {
    const flag = localStorage.getItem("authToken")
    if (flag === "") {
      this.router.navigate(['/login'])
    } else {
      this.service.getAllTypeProduct().subscribe(data => {
        this.typeProduct = data
      })
      console.log(this.typeProduct)
    }
  }

  setType(type: any) {
    this.type = type;
  }

  addNewProduct(product: any) {
    this.service.addProduct(product).subscribe(data => {
      console.log("OK");
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      this.router.navigate([''])
    });
    console.log(product);

  }
}
