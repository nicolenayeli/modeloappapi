import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "https://sublimegrace.com.br/modelo-api";

  constructor(private http: HttpClient){}

// saída para o primeiro end-pont
  operacao(dados:any){
    return this.http.post(this.url + '/api.php', dados);
    

  // return this.http.post(this.url, dados);
  }


  //upload de magem
uploadImagem(idProduto: number, arquivo: File){
  const formData = new FormData();
  formData.append('requisicao', 'produto-upload-imagem');
  formData.append('id_produto', id_produto)
}  

}
