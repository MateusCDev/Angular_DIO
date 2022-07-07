import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/shared/services/lista.service';

@Component({
  selector: 'app-lista-api',
  templateUrl: './lista-api.component.html',
  styleUrls: ['./lista-api.component.css']
})
export class ListaApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista(){
    this.listaService.getLista().subscribe(result => {
      this.personagens = result;
    })
  }
}
