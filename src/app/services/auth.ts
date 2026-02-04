import { Injectable } from '@angular/core';
import { Vendas } from './vendas';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private api: Vendas){}
  
  login(email:string, senha: string){
  //return this.api.operacao({}).subscribe(()=>{}), estrtura de chamada da api
    return this.api.operacao({}).subscribe((res:any)=>{});
  }

  logout(){}

  setUsuario(){}

  getUsuario(){}

  isLogado():boolean{
    return true;
  }
}
