import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../_models/index';
import { ProductosService} from '../../../_services/index';
import { Router } from '@angular/router';
@Component({
    selector: 'product',
    templateUrl: './productos.component.html'

})
export class ProductoComponent  implements OnInit
{

   
   
   
    producto: Productos ;
    productos: Productos[];
  
    private errorMessage: string;

    constructor(private productosService: ProductosService, private _router: Router) {

    }

    ngOnInit()
    {
        this.getProductosAll();
    }

    deleteProducto(id:number)
    {
        var ans = confirm("Estas seguro que quieres eliminar el registro Id: " + id);
        if (ans)
        {
            this.productosService.deleteProducts(id).subscribe(response => {

                this.getProductosAll();
            });
        }

    }
    add() {
        this._router.navigate(['products/add']);
    }
    edit(id:number) {
        this._router.navigate(['products/edit/' + id])
    }
    getProductosAll()
    {
        this.productosService.getProducts()
            .subscribe(productos => {
                this.productos = productos.result;
                console.log("ver datos==" + JSON.stringify(this.productos));
            },
            error => this.errorMessage = <any>error);
    }
   

   
}
