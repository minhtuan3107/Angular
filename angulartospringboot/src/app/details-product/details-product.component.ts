import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent {
  constructor(private service: ProductServiceService, private route: ActivatedRoute) {
  }

  product: any

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findByIdProduct(id).subscribe(data => {
      this.product = data
      console.log(data)
    })
  }
}
