import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/services/vendas';
import { ToastController, IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  imports: [IonHeader, IonicModule],
})
export class ClientePage implements OnInit {
  form!: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private api: Vendas,
      private toast: ToastController
  ) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      datanasc: ['', Validators.required]

    });
  }

  
    salvar(){
    const request = {
      requisicao: 'usuario-add',
      ...this.form.value
    }; 
    console.log(request);
    this.api.operacao(request).subscribe((res:any) => {
      this.mensagem(res.msg); // exibir a mensagem que retornou da api
      if(res.success){
        this.form.reset();
      }
    });
  }
  async mensagem(msg:string){
    const n = await this.toast.create({
      message: msg,
      duration: 2000
    })
    n.present();
  }
}

