import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Laboral } from 'src/app/services/interface/Laboral';
import { ExperienciaService } from 'src/app/services/api-rest/experiencia.service';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar
  @Input() expNueva!:boolean;

  experiencia!:Laboral;
  formulario!:FormGroup
  constructor(public activeModal: NgbActiveModal, private experienciaService:ExperienciaService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      idlaboral: [''],
      puesto: [''],
      descripcion: [''],
      empresa: [''],
      inicio: [''],
      fin: [''],
      fotourl: [''],
      persona: ['']
    })
    /*  esto lo saque de la interface Educacion 
    idlaboral?: number;
    puesto: String;
    descripcion: String;
    empresa: String;
    inicio: Date;
    fin: Date;
    fotourl: String;   
    persona: number;
    */
  
    
  }
  ngOnInit(): void {
    if(!this.expNueva){
      this.getById(this.id)}    
    
  }

  

  cerrarModal(){
    this.activeModal.close();
  }
  getById(id: number) {
    //console.log(this.id)
    this.experienciaService.getById(id).subscribe (
            data => {
         this.experiencia = data; 
         //console.log(this.experiencia)
         this.editarForm(this.experiencia)
        }
        );

  }
  // guardarExperiencia(){
  //   if(this.eduNueva){
  //       this.crearExperiencia();      
  //   }else{
  //     this.actualizarExperiencia();
  //   }

  // }
  // crearExperiencia(){
  //   this.experienciaService.save(this.formulario.value).subscribe(
  //     data => {
  //       this.activeModal.close();
  //     }
  //   );
  // }
  // actualizarExperiencia(){
  //   console.log(this.formulario.value)
  //   this.experienciaService.update(this.id, this.formulario.value).subscribe(
  //     data => {
  //       this.activeModal.close();
  //     }
  //   );
  // }
  editarForm(exp:any){
    this.formulario.setValue( {
      idlaboral: exp.idlaboral,
      puesto: exp.puesto,
      descripcion: exp.descripcion,
      empresa: exp.empresa,
      inicio: exp.inicio,
      fin: exp.fin,
      fotourl: exp.fotourl,
      persona: exp.persona
    });
  }
  guardarExperiencia(){
    if(this.expNueva){
        this.crearExperiencia();      
    }else{
      this.actualizarExperiencia();
    }

  }

  crearExperiencia(){
    this.formulario.value.persona =1
    this.experienciaService.save(this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }


  actualizarExperiencia(){
    console.log(this.formulario.value)
    this.experienciaService.update(this.id, this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
}
