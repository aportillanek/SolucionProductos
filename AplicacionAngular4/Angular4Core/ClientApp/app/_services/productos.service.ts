import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Productos } from '../_models/index';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";
@Injectable()
export class ProductosService
{
    private _urlObtenerProductos = '/Producto/ObtenerProductos';
    public _urlGuardarProductos: string = '/Producto/GuardarProducto';
    public _urlEliminarProductos: string = '/Producto/EliminarProducto';
    private _urLObtenerProductoPorId: string = '/Producto/ObtenerProductosPorId';
    constructor (private http:Http){}

    getProducts()
    {
        var headers = new Headers();
        headers.append("IF-MODIFIED", "Tue, 24 july");
        var urlObtenerProductos = this._urlObtenerProductos;
        return this.http.get(urlObtenerProductos, { headers: headers })
            .map(response => <any>(<Response>response).json());

    }

    saveProducts(products: Productos): Observable<string>
    {
        let body = JSON.stringify(products);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._urlGuardarProductos, body, options)
            .map(res => res.json().message)
            .catch(this.handleError);

    }

    deleteProducts(id: number): Observable<string>
    {
        var urlDelete = this._urlEliminarProductos + '/'+ id;

        return this.http.delete(urlDelete)
            .map(res => res.json().message)
            .catch(this.handleError);


    }

    private handleError(error: Response)
    {
        return Observable.throw(error.json().error || 'Opps!! Server error');


    }
    getProductoById(id: number) {

        var urlObtenerProductoPorId = this._urLObtenerProductoPorId + '/' + id;
        return this.http.get(urlObtenerProductoPorId)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

}