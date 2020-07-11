import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../services/products';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  product;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private productService:ProductsService,
    private snackbar:MatSnackBar,
    private dialogBox:MatDialog
  ) { }

  ngOnInit(): void {
  
    this.product=this.productService.getProductById(this.data.id,this.data.type)
    
  }
  onOrder(){
    this.snackbar.open('Order Accepted Successfully😍','close',{
      duration:2000
    })
    this.dialogBox.closeAll();
  }
  onClose(){
    this.dialogBox.closeAll();
  }

}
