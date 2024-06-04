import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {CurrencyPipe, NgForOf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormatStringPipe} from "../format-string.pipe";
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    RouterLink,
    CurrencyPipe,
    FormatStringPipe
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  constructor(private productService: ProductServiceService) {
  }

  listProduct: any

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.listProduct = data
      console.log(data)
    })
  }
}
