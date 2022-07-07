import { Component, OnInit } from '@angular/core';

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
      sobrenome: 'Cesar'
    },
    {
      nome: 'Tereza',
      sobrenome: 'Cristina'
    },
    {
      nome: 'Maria',
      sobrenome: 'Eduarda'
    }
  ];

  constructor(){

  }

  ngOnInit(): void {
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


}
