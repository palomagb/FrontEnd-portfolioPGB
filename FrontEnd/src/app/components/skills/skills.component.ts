import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { SkillService } from 'src/app/services/api-rest/skill.service';
import { Skill } from 'src/app/services/interface/Skill';
import { SkillsModalComponent } from '../modales/skills-modal/skills-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  login:any;
  

 //inyecta el servicio de modal
 constructor(private skillService:SkillService,  private modalService: NgbModal, private loginService:LoginService ) {}
  
 skill!: any [] ;

 getById(id: number) {
   this.skillService.getById(id).subscribe (
     data => { this.skill = data; }
   );
 }

 getAll() {
   this.skillService.getAll().subscribe (
     data => { this.skill = data; }
   );
 }
 delete(id: number) {
   this.skillService.delete(id).subscribe (
     data => { this.skill = data; }
   );
 }

 save(skill:any) {
   this.skillService.save(skill).subscribe (
     data => { this.skill = data; }
   );
 }

 update(id: number, skill: any) {
   this.skillService.update(id,skill).subscribe (
     data => { this.skill = data; }
   );
 }


 ngOnInit(): void {
  this.loginService.LogState().subscribe((login) => (this.login = login));  
  this.getAll()
}


  skills: any[] = [
  {   porcentaje: 70,
        area: "Git"
  },
    {   porcentaje: 90,
      area: "LIDERAZGO"
  },
  {   porcentaje: 100,
    area: "COMUNICACIÓN"
},
{   porcentaje: 60,
  area: "MYSQL"
},
{   porcentaje: 50,
  area: "JAVA"
},
{   porcentaje: 40,
  area: "ANGULAR"
}]; 

abrirModal(id:number){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  const modalRef = this.modalService.open(SkillsModalComponent, { centered: true, size: 'sm' }   );   //{ centered: true }     
  modalRef.componentInstance.id = id;      //pasa el id del elemento que se quiere editar al componente del modal
  
  modalRef.result.then((data) => {
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
