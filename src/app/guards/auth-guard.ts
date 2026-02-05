import { Auth } from './../services/auth';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{ //interface, é um contrato que vc firma com a classe
  constructor(
    private auth: Auth,
    private router: Router
  ){}
  canActivate():boolean {
    if(this.auth.isLogado()){
      return true;
    }
    this.router.navigateByUrl('/login'); //navigateByUrl
    return false;
  }
}