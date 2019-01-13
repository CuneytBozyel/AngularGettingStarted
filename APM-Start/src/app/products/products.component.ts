import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product list';
  imageWidth = 50;
  imageMargin = 2;
  showImage: Boolean = false;
  message: String;
  _listFilter: string;
  errorMessage = '';


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;

    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];
  constructor(private productService: ProductService) {
    this.filteredProducts = this.products;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  toogleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {

  }
}
