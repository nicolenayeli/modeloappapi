
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
  standalone:false
})
export class ProdutoDetalhePage implements OnInit {
salvar() {
throw new Error('Method not implemented.');
}
id!:number;
form!:FormGroup;
categorias:any[]=[];
produto:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private api:Vendas,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      descricao:['', Validators.required],
      valor_unit: [0,Validators.required],
      unidade_venda:[''],
      categoria_id:[0],
      estoque_minimo: [0],
      classe_desconto:[0],
      imagem: [''],
      cod_barras:[''],
      quantidade:[0],
      data_ultimo_movimento: ['']
    });

    //this.form.patchValue({this.produto});

  }
  carregar(){
    this.api.operacao({
      requisicao:'produto-listar',
      id:this.id
    }).subscribe((res:any)=>{
      if(res.success){
        this.form.patchValue(res.data);
      }
    });
  }

  listaCategorias(){
    this.api.operacao({requisicao:'categoria-listar'}).subscribe((res:any)=>{
      if(res.success){
        this.categorias = res.data;
        
      }
    });
  }
  buscaProduto(is:number){
        this.api.operacao({requisicao:'produto-listar', id:this.id}).subscribe((res:any)=>{
      if(res.success){
        console.log(res.data);
        this.produto = res.data;
      }
  
    });
    this.form.patchValue;
  }


}