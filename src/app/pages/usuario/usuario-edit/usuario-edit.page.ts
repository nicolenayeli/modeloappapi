import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
  standalone:false
})
export class UsuarioEditPage implements OnInit {
form!: FormGroup;
id!: number;
niveis: any[]=[];
  constructor(
    private route: ActivatedRoute, //ActivatedRouter vai voltar o router
    private fb: FormBuilder,
    private api: Vendas,
    private router: Router,
    private toast:ToastController
  ) { }

  ngOnInit() {
    //recuperando o id do usuario que veio pela rota
    this.id = Number(this.route.snapshot.paramMap.get('id')); //snapshop uma 'fotografia'
    this.form = this.fb.group({
      nome:['',Validators.required],
      senha:['',Validators.required],
      nivel:['',Validators.required]

    });
    this.carregar(); // carregar usuario
    this.listarNiveis();
  }

    carregar(){
      this.api.operacao({
        requisicao: 'ususario-listar',
        id_usuario: this.id
      }).subscribe((res:any)=>{
        if(res.success){
          this.form.patchValue({
            nome:res.data.nome,
            nivel:res.data.nivel_id
          })
        }
      });
    }// final do método carregar
    salvar(){
      const request = {
        requisicao: 'usuario-editar',
        id_usuario: this.id,
        ...this.form.value
      }
      this.api.operacao(request).subscribe((res: any)=>{
        this.mensagem(res.msg);
        this.router.navigateByUrl('/usuario-list');
      });
    }
    async mensagem(msg: string){
      const t = await this.toast.create({
        message: msg,
        duration: 2000 // 2 segundos
      }) 
    }
}
