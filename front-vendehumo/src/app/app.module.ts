import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { VhFormComponent } from './components/vh-form/vh-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CabeceraComponent,
    DetalleComponent,
    VhFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
