import { Component, OnInit, Input } from '@angular/core';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  @Input() lista =[
    {
      nome: '',
      sobrenome: '',
      idade: 0
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }
  
  

}
