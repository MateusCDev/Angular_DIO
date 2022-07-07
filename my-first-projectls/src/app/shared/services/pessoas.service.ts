import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  getPessoas():Observable<any>{
    let pessoasArray =[
      {
        nome: 'Mateus',
        sobrenome: 'Cesar',
        idade: 23
      },
      {
        nome: 'Tereza',
        sobrenome: 'Cristina',
        idade: 44
      },
      {
        nome: 'Maria',
        sobrenome: 'Eduarda',
        idade: 16
      },
      {
        nome: 'Gessica',
        sobrenome: 'Moreira',
        idade: 21
      }
    ]

    return of(pessoasArray)
  }
}
