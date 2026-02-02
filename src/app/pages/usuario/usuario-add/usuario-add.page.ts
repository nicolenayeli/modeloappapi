import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';
import { IonHeader, IonInput, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
  standalone:false
})
export class UsuarioAddPage implements OnInit {
  form! : FormGroup;  // "!" criar ele como vazio, null
  
  
  constructor(
     private formBuilder: FormBuilder,
     private api: Vendas,
     private toast: ToastController
  ) {}
 
  
  ngOnInit() { // quando a página dofor carregada
    //gnOnInit é parte do ciclo de vida do APP Ionic
    this.form = this.formBuilder.group({
      nome:['', Validators.required],
      email:['',Validators.required, Validators.email],
      senha:['', Validators.required],
      id_nivel:['',Validators.required]
    });
  }

  salvar(){
    const request = {
      requisicao: 'usuario-add',
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res:any)=> { //subscribe executa a API deste metodo aoperação
        this.mensagem(res.msg); // esta linha é apenas a mensagem que retornou da API
        if(res.success){
          this.form.reset();
        }
         
      }); 
    }
async mensagem(msg: string){
  const t = await this.toast.create({
    message: msg,
    duration: 2000, 
  });
  t.present();
}
}
