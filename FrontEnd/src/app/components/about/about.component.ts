import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';
import { AboutModalComponent } from '../modales/about-modal/about-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 constructor(private personaService:PersonaService, private modalService: NgbModal, private loginService:LoginService)  { }
 
  id:number =1
  persona!: Persona ;
  login:any;   
  getById(id: number) {
    this.personaService.getById(id).subscribe (
			data => { this.persona = data;
      //console.log(this.persona)        
      }
		);
  }
  
  update(id: number, profile: any) {
      this.personaService.update(id,this.persona).subscribe (
        data => { this.persona = data; }
      );
    }
    ngOnInit(): void {
      this.getById(this.id) 
      this.loginService.LogState().subscribe((login) => (this.login = login)); 
      
    }
     

  /*de aca tomada los datos    
  About: any[] = [
  {   acercade: "Acerca de",
      texto: "Programador fullstack junior freelance."

  } 
]
*/
abrirModal(id:any){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  console.log(id)
  const modalRef = this.modalService.open(AboutModalComponent, { centered: true }   );   //{ centered: true }     
  modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
  modalRef.result.then((data) => {
    console.log("pasa por aca?")
    this.ngOnInit();
  }, (reason) => {
    alert("no funciono")
  })
  
}
/*
isLoggedIn(): boolean {

  return this.loginService.isLoggedIn();  
}
*/
}
