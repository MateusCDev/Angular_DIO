import { Component, OnInit } from '@angular/core';
import { PessoasService } from './shared/services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contador = 0;
  nome = "Mateus";
  text= "";

  pessoas = [
    {
      nome: 'Mateus',
      sobrenome: 'Cesar',
      idade: 0
    }
  ];

  constructor(private pessoasService:PessoasService){

  }

  ngOnInit(): void {
    this.getPessoas()
    let intervalo = setInterval(() => {
      this.contador++;
      if (this.contador === 10){
        clearInterval(intervalo);
      }
    }, 1000)
  }

   clicou(nome:string): void {
    console.log('clicou em mim', nome)
  }

  getPessoas(){
    this.pessoasService.getPessoas().subscribe(pessoa => {
      this.pessoas = pessoa
    })
  }
}
