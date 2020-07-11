import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Routes ,RouterModule} from '@angular/router';
import { CakesComponent } from './cakes/cakes.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShortPipe } from './short.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { AboutComponent } from './about/about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const routes:Routes=[
  {path:'',component:HomeComponent}
]
  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CakesComponent,
    ShortPipe,
    ProductDialogComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule

  ],
  entryComponents:[
    ProductDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
