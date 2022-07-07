import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  apiURl= 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getLista():Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiURl);
  }
}
