import { Injectable } from "@angular/core";



@Injectable({
    providedIn:'root'
})
export class ProductsService{
    cakes=[
        {
          'type':'chocklate',
          'items':[
            {
              'id':'1',
              'name':'Flourless Chocolate Cake',
              'img':'https://images8.alphacoders.com/437/thumb-1920-437055.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {
              'id':'2',
              'name':'Chocolate Coconut Cake',
              'img':'https://chocolatechocolateandmore.com/wp-content/uploads/2015/08/choccoconutcake.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {
              'id':'3',
              'name':'Flourless Chocolate Cake',
              'img':'https://images8.alphacoders.com/437/thumb-1920-437055.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {
              'id':'4',
              'name':'Chocolate Coconut Cake',
              'img':'https://chocolatechocolateandmore.com/wp-content/uploads/2015/08/choccoconutcake.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            }
          ]
        },
        {
          'type':'strawberry',
          'items':[
            {
              'id':'5',
              'name':'Flourless Chocolate Cake',
              'img':'https://images8.alphacoders.com/437/thumb-1920-437055.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {
              'id':'6',
              'name':'Chocolate Coconut Cake',
              'img':'https://chocolatechocolateandmore.com/wp-content/uploads/2015/08/choccoconutcake.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {
              'id':'7',
              'name':'Flourless Chocolate Cake',
              'img':'https://images8.alphacoders.com/437/thumb-1920-437055.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            },
            {'id':'8',
              'name':'Chocolate Coconut Cake',
              'img':'https://chocolatechocolateandmore.com/wp-content/uploads/2015/08/choccoconutcake.jpg',
              'description':'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
            }
          ]
        }
        
      ]
      getProducts(){
          return this.cakes.slice();
      }
      getProductById(id,type){
          
                

          let product=this.cakes.find((p)=>p.type==type)['items']
          return product.find((p)=>p.id==id)
      }
}