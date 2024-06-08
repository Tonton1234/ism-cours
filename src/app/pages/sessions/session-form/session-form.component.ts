import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Select2Module } from 'ng-select2-component';
import { RestResponse } from '../../../core/models/rest.response';
import { Classe } from '../../../core/models/classe.response';
import { Professeur } from '../../../core/models/professeur.response';

import { Semestre } from '../../../core/models/semestre.response';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { ProfesseurServiceService } from '../../../services/impl/professeur-service.service';
import { SemestreServiceService } from '../../../services/impl/semestre-service.service';
import { CoursServiceService } from '../../../services/impl/cours-service.service';
import { Router } from '@angular/router';
import { ProfesseurClasseModulesServiceService } from '../../../services/impl/professeur-classe-modules-service.service';
import { Module } from '../../../core/models/module.response';
import { SalleServiceService } from '../../../services/impl/salle-service.service';
import { Cours } from '../../../core/models/cours.response';
import { Salle } from '../../../core/models/salle.response';
import { SessionServiceService } from '../../../services/impl/session-service.service';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,Select2Module],
  templateUrl: './session-form.component.html',
  styleUrl: './session-form.component.css'
})
export class SessionFormComponent implements OnInit {

prof: any;
mod: any;
overlay= false;
dataClasses: any=[];

    classes?: RestResponse<Classe[]> ;
    professeurs?:RestResponse<Professeur[]>
    cours?:RestResponse<Cours[]>
    modules?:RestResponse<Module[]>
    semestres?:RestResponse<Semestre[]>
    salle?:RestResponse<Salle[]>
coursSelect: any;
      constructor(private fb: FormBuilder,
        private classeService:ClasseServiceService,
        private saleService:SalleServiceService,
        private moduleService:ModuleServiceService,
        private professeurService:ProfesseurServiceService,
        private semestreService:SemestreServiceService,
        private coursService:CoursServiceService,
        private sessionService:SessionServiceService,
        private router:Router,
        private professeurClasseModuleService:ProfesseurClasseModulesServiceService,
        ){

      }

      SearchByCours() {
        throw new Error('Method not implemented.');
        }

    onSubmit() {
      console.log('ok')
      const {...session} = this.form.value
          this.sessionService.add(session).subscribe(data=>{
             if(data.status==201){
              this.form.reset();
              this.router.navigateByUrl("/session/all")
            }

          });
          console.log(session)
    }
    form=this.fb.group({
      date: ["",[Validators.required]],
      cours: [0,[Validators.required]],
      heureDebut:["",[Validators.required]],
      heureFin:["",[Validators.required]],
      salle: [0,[Validators.required]],

    })

      ngOnInit(): void {
        this.refresh();
      }

      refresh(page:number=0, keyword: string=""){
        this.classeService.findAll(page).subscribe(data=>{
          this.classes=data

        });
        this.classeService.findAll(page).subscribe(data=>{
          this.classes=data;


        });
        this.semestreService.findAll(page).subscribe(data=>{
          this.semestres=data

        });
        this.saleService.findAll(page).subscribe(data=>{
          this.salle=data

        });
        this.coursService.findAll(page,keyword).subscribe(data=>{
          this.cours=data

        });
        this.professeurService.findAll(page).subscribe(data=>{
          this.professeurs=data

        });
        this.moduleService.findAll(page).subscribe(data=>{
          this.modules=data

        });
        this.semestreService.findAll(page).subscribe(data=>{
          this.semestres=data

        });
        // Au demarrage
      }
     

}
