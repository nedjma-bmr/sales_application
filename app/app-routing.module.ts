import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const produits = 'produits';
const routes: Routes = [
  
  {
    path: '',     
    redirectTo: 'login',
    pathMatch: 'full'
  },

  
  
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./pages/commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./pages/livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'factures',
    loadChildren: () => import('./pages/factures/factures.module').then( m => m.FacturesPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'client-modal',
    loadChildren: () => import('./pages/client-modal/client-modal.module').then( m => m.ClientModalPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./pages/produit/produit.module').then( m => m.ProduitPageModule)
  },
 
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
