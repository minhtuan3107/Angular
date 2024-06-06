import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-component',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-component.component.html',
  styleUrl: './edit-component.component.css'
})
export class EditComponentComponent {
  constructor(private service: ProductServiceService, private route: ActivatedRoute, private router: Router) {
  }

  product: any
  listType: any

  ngOnInit() {
    const flag = localStorage.getItem("authToken")
    if (flag === "") {
      this.router.navigate(['/login'])
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.findByIdProduct(id).subscribe(data => {
        this.product = data
      })
      this.service.getAllTypeProduct().subscribe(data => {
        this.listType = data
      })
    }
  }

  editProductById(product: any) {
    this.service.addProduct(product).subscribe(() => {
      this.router.navigate([''])
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    })
  }
}
