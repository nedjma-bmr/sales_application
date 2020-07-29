import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'devis',
    loadChildren: () => import('./pages/devis/devis.module').then( m => m.DevisPageModule)
  },
  {
    path: 'detail-client',
    loadChildren: () => import('./pages/detail-client/detail-client.module').then( m => m.DetailClientPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./pages/produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'produits-devis',
    loadChildren: () => import('./pages/produits-devis/produits-devis.module').then( m => m.ProduitsDevisPageModule)
  },
  {
    path: 'ajouter-devis',
    loadChildren: () => import('./pages/ajouter-devis/ajouter-devis.module').then( m => m.AjouterDevisPageModule)
  },
  {
    path: 'ajouter-devis-produit',
    loadChildren: () => import('./pages/ajouter-devis-produit/ajouter-devis-produit.module').then( m => m.AjouterDevisProduitPageModule)
  },
  {
    path: 'ajou-modif-client',
    loadChildren: () => import('./pages/ajou-modif-client/ajou-modif-client.module').then( m => m.AjouModifClientPageModule)
  },
  {
    path: 'ajout-command',
    loadChildren: () => import('./pages/ajout-command/ajout-command/ajout-command.module').then( m => m.AjoutCommandPageModule)
  },  {
    path: 'ajout-produit',
    loadChildren: () => import('./pages/ajout-produit/ajout-produit/ajout-produit.module').then( m => m.AjoutProduitPageModule)
  },

  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
