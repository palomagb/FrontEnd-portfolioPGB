import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DeletebuttonComponent } from './components/deletebutton/deletebutton.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';
import { EducacionModalComponent } from './components/modales/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './components/modales/experiencia-modal/experiencia-modal.component';
import { ProyectoModalComponent } from './components/modales/proyecto-modal/proyecto-modal.component';
import { SkillsModalComponent } from './components/modales/skills-modal/skills-modal.component';
import { AboutModalComponent } from './components/modales/about-modal/about-modal.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';
import { ProfileModalComponent } from './components/modales/profile-modal/profile-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InterceptorService } from './services/api-rest/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ProfileComponent,
    SocialLinkComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    DeletebuttonComponent,
    EditbuttonComponent,
    AddbuttonComponent,
    EducacionModalComponent,
    ExperienciaModalComponent,
    ProyectoModalComponent,
    SkillsModalComponent,
    AboutModalComponent,
    PagErrorComponent,
    ProfileModalComponent,
    IniciarSesionComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({"responsive": true}),
    NgxScrollTopModule,
    ReactiveFormsModule //se importa para usar en los formularios reactivos
  ],

  
  providers: [{
    provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
}],
  bootstrap: [AppComponent],
  entryComponents: [EducacionModalComponent, ExperienciaModalComponent, ProyectoModalComponent, SkillsModalComponent, AboutModalComponent, ProfileModalComponent] //habilia al componente para que se pueda usar en un modal
})
export class AppModule { }
