import { Auth } from './../services/auth';
import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public pedido: any = null;
  mensagem = '';

  constructor(
    private api: Vendas,
    private toast: ToastController,
    private auth: Auth,
    private router: Router

) {}

  ngOnInit(){
   
  }
  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login'), {replaceUrl:true}
  }


   //async Listar(){  //async quando acontece duas coisas ao mesmo tempo, duas "operações ao mesmo tempo"
    //listar pedidos
    //const pedidosLista = {
     // requisicao:'pedido-listar',
    //  id_pedido: 100053
   // }
   // console.log(pedidosLista);

   // const resposta: any =  await lastValueFrom(this.api.operacao(pedidosLista));// await porque estamos em um emtodo async
   // this.mensagem = resposta.msg; 
    //this.pedido = resposta.data;

   // console.log(this.pedido);
 // }
}
