import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/api-rest/autentication.service';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { RedesService } from 'src/app/services/api-rest/redes.service';
import { Redes } from 'src/app/services/interface/Redes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login:any;

  socialLinks!: Redes [] 

  constructor(private router: Router, private loginService:LoginService, private autenticationServ: AutenticationService, private redesService: RedesService) { }

  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
    this.getAll();
  }

  iniciarSesion(){
    this.router.navigate(['login']);   
  }

  cerrarSesion(){
    this.autenticationServ.CerrarSesion();
    this.router.navigate(['home']);
  }
  /*
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
  */

  getAll(){
    this.redesService.getAll().subscribe((redes) => {
      this.socialLinks = redes;
      console.log(redes);
    });
  }

}
