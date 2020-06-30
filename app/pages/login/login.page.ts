import { Component} from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  //l'identifiant de l'utilisateur
  username:string;
  //le mot de passe de l'utilisateur
  password:string;
  //l'erreur d'authentification
  error:string;
  //permet d'afficher le mot de passe
  showPassword=false;

  passwordToggleIcon='eye';
  
  //formulaire d'authentification
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
     

    ]),
    password: new FormControl('',[
      Validators.required,
      
    ]),

  });



  constructor(public navCrtl:NavController,
    private loginService:LoginService,
    private alertCtrl:AlertController,
    private loadingCtrl:LoadingController,
    private router:Router
    ) { }

  /**
   * permet d'afficher ou masquer le mot de passe
   */
  togglePassword(){
    this.showPassword=!this.showPassword ;
    if(this.passwordToggleIcon=='eye'){
      this.passwordToggleIcon='eye-off';
     } else{
      this.passwordToggleIcon='eye';
      }
    }
    


 
 /**
  * authentification de l'utilisateur
  */
 async login() {
  
    const loading = await this.loadingCtrl.create({message:'Connexion ...'});
    await loading.present();
    this.loginService.login(this.form.value).subscribe (
      async token => { 
        localStorage.setItem('token' , token);
        loading.dismiss();
        this.router.navigateByUrl('/clients');
        
      },
      async ()=> {
        const alert = await this.alertCtrl.create({message :'Login Failed' , buttons:['OK']});
        await alert.present();
        loading.dismiss();
      }
    );
   
    
    
  }

}
