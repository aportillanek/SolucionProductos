import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { Headers, RequestOptions, BaseRequestOptions } from '@angular/http';







import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductoComponent } from './components/app/productos/productos.component';
import { ProductoAddEditComponent } from './components/app/productos/product-add-edit.component';
import { ProductosService } from './_services/index';

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers();
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.body = '';
    }
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProductoComponent,
        ProductoAddEditComponent
    ],
    imports: [
       
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            {
                path: 'product', component: ProductoComponent
               
            },
            { path: "products/add", component: ProductoAddEditComponent },
            { path: "products/edit/:id", component: ProductoAddEditComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ProductosService],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
