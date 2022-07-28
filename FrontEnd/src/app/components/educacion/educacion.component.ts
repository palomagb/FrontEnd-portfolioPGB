import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //importa el servicio de modal
import { EducacionService } from 'src/app/services/api-rest/educacion.service';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { Educacion } from 'src/app/services/interface/Educacion';
import { EducacionModalComponent } from '../modales/educacion-modal/educacion-modal.component'; //importa el componente para usarlo como modal

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit { 

  login:any;
  //inyecta el servicio de modal
  constructor(private modalService: NgbModal, private educacionService:EducacionService, private loginService:LoginService) {}
  
  educacion!: Educacion [] ;
  eduNueva:boolean = true;
  
  getById(id: number) {
    this.educacionService.getById(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  getAll() {
    this.educacionService.getAll().subscribe (
			data => { 
        this.educacion = data;
        //console.log(this.educacion)
      }
		);
    
  }
  delete(id: number) {
    this.educacionService.delete(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  save(educacion:any) {
    this.educacionService.save(educacion).subscribe (
			data => { this.educacion = data; }
		);
  }

  update(id: number, educacion: any) {
    this.educacionService.update(id,educacion).subscribe (
			data => { this.educacion = data; }
		);
  }


  ngOnInit(): void {
     
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.login = login));
  }
  /*
  Educacion: any[] = [
    {
      ideducion: 1,
      titulo: 'Full Stack Developer',
      fechafin: null,
      institucion: 'AP',
      institucionurl: 'www.inti.gob.ar',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
    {
      ideducion: 2,
      titulo: 'Padawan',
      fechafin: '2021-01-01',
      institucion: 'Jedi Order',
      institucionurl: 'www.starwars.com',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
  ];
*/

  abrirModal(id:any){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  crearEducacionModal(){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.eduNueva = this.eduNueva;     // pasa un buleano para avisar al modal que es un objeto a crear

    modalRef.result.then((data) => {
      this.ngOnInit();
    }, (reason) => {
      alert("no funciono")
    })
    
  }

  borrarEducacion(id:any){
    this.educacionService.delete(id).subscribe (
      data => { this.ngOnInit() }
    );
  }
  /*
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
  */
}