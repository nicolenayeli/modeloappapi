import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone:false
})
export class ProdutoListPage implements OnInit {

  produtos:any[]=[];
  start: number = 0; // controla o ínicio da busca
  limit: number = 20; //quantidade de item por página (você decide)
  palavra: any;  // any é qualquer valo, palavra é qualquer palavra

  constructor(private api: Vendas, private router:Router) { }

  ngOnInit() {
    this.listar();
    
  }
  listar(event?:any, atualizar: boolean=false){
    // se for um refresh, a gente (nois) reseta o contador e a lista 
    if(atualizar){
      this.start = 0;
      this.produtos=[];
    }
// garos e gatas: aqui a gente a quantidade de linhas que queremos exibir e incrementar
    this.api.operacao({
      requisicao:'produto-listar',
      limit:this.limit,
      start:this.limit })
    .subscribe((retornoDaApi:any)=>{
      if(retornoDaApi.success){
        // aqui a gente acrescenta os novos itens aos existentes
        this.produtos = [retornoDaApi, ...retornoDaApi.data];

        // por fim incrmenta o start para o próximo carrgamento
        this.start += this.limit // start inicia com zero (0) e aqui nessa linha passa a valer 20, 40, 60 por diante 
      }
      // Finaliza a animação do componenteque disparou o evento
         event.target.complete();

      //desativar o infinite scroll se não houver mais dados
      if(retornoDaApi.data.length < this.limit && event?.target?.disabled!==undefined){ //&& = e, ? = nulo
        event.target.disabled = true;
        // opcional: colocar mensagem...toast
      } 
    });
  }
  // puxar para atualizar (Reseta a lista)
  //metodo
  atualizar(event:any){
    this.listar(event, true);
  }

  //Scroll infinito (Carrega mais...)
  carregaMais(event:any){
    this.listar(event, false);
  }



  abrirDetalhes(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }
  abrirImagem(id:number){
    this.router.navigate(['/produto-imagem', id]);
  }


  //Função disparada pelo SearchBar
  buscar(event:any){
    this.palavra = event.target.value.toLowerCase();
    this.listar(null,true);
  }


}