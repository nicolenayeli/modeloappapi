import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.page.html',
  styleUrls: ['./cliente-editar.page.scss'],
  standalone: false,
})
export class ClienteEditarPage implements OnInit {
form!:FormGroup;
id!: number;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private api: Vendas,
    private router: Router,
    private toast: ToastController,
  ) { }

  ngOnInit() {
  this.id=Number(this.route.snapshot.paramMap.get('id'));
  this.form=this.fb.group({
    nome:['', Validators.required],
    telefone:['',Validators.required],
    datanasc:['', Validators.required]
  });
  
  
  }

}
