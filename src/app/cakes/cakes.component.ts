import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductsService } from '../services/products';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes;
  constructor(
    private dialog:MatDialog,
    private productService:ProductsService
  ) { }
  
  ngOnInit(): void {
    this.cakes=this.productService.getProducts()
  }
  getCake(id,type){
    this.dialog.open(ProductDialogComponent,{
      data:{
        id:id,
        type:type
      },
      panelClass:'product_dialog'
    })
  }

}
