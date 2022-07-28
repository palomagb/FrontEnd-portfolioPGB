import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/services/interface/Educacion';
import { EducacionService } from 'src/app/services/api-rest/educacion.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar
  @Input() eduNueva!:boolean;
  educacion!:Educacion;
  formulario!:FormGroup
  constructor(public activeModal: NgbActiveModal, private educacionService:EducacionService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      ideducacion: [''],
      titulo: [''],
      fechafin: [''],
      institucion: [''],
      institucionurl: [''],
      fotourl: [''],
      persona: ['']
    })
    /*  esto lo saque de la interface Educacion 
    ideducacion?: number;
    titulo: String;
    fechafin: Date;
    institucion: String; 
    institucionurl: String; 
    fotourl: String;
    persona: number;
    */
    
  }
  ngOnInit(): void {
    if(!this.eduNueva){
      this.getById(this.id)}    
    
  }

  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
    //console.log(this.id)
    this.educacionService.getById(id).subscribe (
            data => {
         this.educacion = data; 
         //console.log(this.educacion)
         this.editarForm(this.educacion)
        }
        );

  }
  editarForm(edu:any){
    this.formulario.setValue( {
      ideducacion: edu.ideducacion,
      titulo: edu.titulo,
      fechafin: edu.fechafin,
      institucion: edu.institucion,
      institucionurl: edu.institucionurl,
      fotourl: edu.fotourl,
      persona: edu.persona
    });
  }

  guardarEducacion(){
    if(this.eduNueva){
        this.crearEducacion();      
    }else{
      this.actualizarEducacion();
    }

  }

  crearEducacion(){
    this.formulario.value.persona = 1
    this.educacionService.save(this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }


  actualizarEducacion(){
    console.log(this.formulario.value)
    this.educacionService.update(this.id, this.formulario.value).subscribe(
      data => {
        this.activeModal.close();
      }
    );
  }
  
}
