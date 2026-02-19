import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-imagem',
  templateUrl: './produto-imagem.page.html',
  styleUrls: ['./produto-imagem.page.scss'],
})
export class ProdutoImagemPage implements OnInit {
  idProduto: any;
  imagemFile!:File;
  preview:any;

  constructor(
    private route:ActivatedRoute,
    private api:Vendas,
    private router:Router
  ) {
    this.idProduto = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}
    async tirarFoto(){
        //instalar pluguin de camera: npm install @capapcitor/camera >>>> npx cap sync
        const  foto = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: Camerate.Base64,
        source:CameraSource.Prompt
          });

          this.preview = 'data:iamge/jpeg;base64, ' +foto.base64String;
          const blob = this.base64toBlob(foto.base64String!, 'image/jpeg');
      }
      base64Blob(base64:string, mime:string){

      }
  }


