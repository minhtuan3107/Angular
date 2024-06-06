import {Component} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {CurrencyPipe, NgForOf, NgStyle, UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {I18nPluralPipe} from "@angular/common";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    RouterLink,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  constructor(private productService: ProductServiceService, private router: Router) {
  }

  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  listProduct: any

  deleteProductById(id: string, name: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! " + name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(
          () => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.loadProducts(); // Call the method to reload the products here
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the product.",
              icon: "error"
            });
          }
        );
      }
    });
  }

  ngOnInit() {
    const flag = localStorage.getItem("authToken")
    if (flag === "") {
      this.router.navigate(['/login'])
    } else {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.productService.getAll(this.currentPage).subscribe(data => {
      const productData = data as { content: any[], totalPages: number };
      this.listProduct = productData.content;
      this.totalPages = productData.totalPages;
    });
    console.log(this.listProduct)
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  previousPage(): void {
    if (this.currentPage >= 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }
}
