import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../../_services/index';
@Component
 (
    {
        selector: 'products/add',
        templateUrl:'./product-add-edit.component.html'
    }
)

export class ProductoAddEditComponent implements OnInit {

    productForm: FormGroup;       
    title: string = "Add";
    id: number = 0;
    errorMessage: any;
    submitted: boolean = false;
    _ref: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _productoService: ProductosService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = parseInt(this._avRoute.snapshot.params["id"]);
            console.log(this.id);
            this.title = 'Edit';
        }
        this.productForm = this._fb.group({
            id: 0,
            productName: ['', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30), Validators.pattern("^[a-zA-Z ]+$")]],
           
            precio: ['', [Validators.required,Validators.pattern("^[0-9]+$")]]
            
        })
    }
    ngOnInit()
    {
        if (this.id > 0) {
           
            this._productoService.getProductoById(this.id)
                .subscribe(resp => this.productForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }
    save() {
        
        if (!this.productForm.valid) {
            this.submitted = true;
            return;
        }

        this._productoService.saveProducts(this.productForm.value)
            .subscribe(custId => {
                //alert('Saved Successfully!')
                this._router.navigate(['product', { id: custId }]);
            }, error => this.errorMessage = error)

    }
    cancel() {
        this._router.navigate(["product", { id: this.id }]);
    }

    get productName() { return this.productForm.get('productName'); }
    get precio() { return this.productForm.get('precio'); }
   
}