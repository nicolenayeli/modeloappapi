import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', // rota raiz,  rota principal
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'usuario-add',
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-lisionic',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cliente-list',
    loadChildren: () => import('./pages/cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'cliente-add',
    loadChildren: () => import('./pages/cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'cliente-editar',
    loadChildren: () => import('./pages/clientes/cliente-editar/cliente-editar.module').then( m => m.ClienteEditarPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
