import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {ActivatedRoute} from "@angular/router";
import {NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent {
  constructor(private service: ProductServiceService, private route: ActivatedRoute, private router: Router) {
  }

  product: any

  ngOnInit() {
    const flag = localStorage.getItem("authToken")
    if (flag === "") {
      this.router.navigate(['/login'])
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.findByIdProduct(id).subscribe(data => {
        this.product = data
        console.log(data)
      })
    }
  }
}
