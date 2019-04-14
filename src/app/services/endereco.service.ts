import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { Endereco} from '../interface/endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  
  constructor(private http: HttpClient) { }

  public getEndereco(cep: number): Observable<Endereco> {
    const url = `${environment.urlConsultaCep}${cep}`;
    return this.http.get<Endereco>(url);
  }
}