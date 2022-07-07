import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/diretivas/marca-texto.directive';
import { PessoasService } from './shared/services/pessoas.service';
import { ListaPessoasComponent } from './shared/components/lista-pessoas/lista-pessoas.component';
import { ListaApiComponent } from './components/lista-api/lista-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListaPessoasComponent,
    ListaApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
