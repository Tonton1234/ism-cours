import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RestResponse } from '../../../core/models/rest.response';
import { Classe } from '../../../core/models/classe.response';
import { Professeur } from '../../../core/models/professeur.response';
import { Module } from '../../../core/models/module.response';
import { Semestre } from '../../../core/models/semestre.response';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { ProfesseurServiceService } from '../../../services/impl/professeur-service.service';
import { SemestreServiceService } from '../../../services/impl/semestre-service.service';
import { Router } from '@angular/router';
import { ProfesseurClasseModulesServiceService } from '../../../services/impl/professeur-classe-modules-service.service';
import { PaginationModel } from '../../../core/models/pagination.model';
import { Select2Module } from 'ng-select2-component';
import { CoursServiceService } from '../../../services/impl/cours-service.service';


@Component({
  selector: 'app-form-cours',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,Select2Module],
  templateUrl: './form-cours.component.html',
  styleUrl: './form-cours.component.css'
})
export class FormCoursComponent implements OnInit {

prof: any;
mod: any;
overlay= false;
dataClasses: any=[];
    
    classes?: RestResponse<Classe[]> ;
    professeurs?:RestResponse<Professeur[]> 
    modules?:RestResponse<Module[]> 
    semestres?:RestResponse<Semestre[]> 
      constructor(private fb: FormBuilder,
        private classeService:ClasseServiceService,
        private moduleService:ModuleServiceService,
        private professeurService:ProfesseurServiceService,
        private semestreService:SemestreServiceService,
        private coursService:CoursServiceService,
        private router:Router,
        private professeurClasseModuleService:ProfesseurClasseModulesServiceService,
        ){
        
      }
      
      SearchByModule(page:number=0) {
        this.professeurClasseModuleService.findByModule(page,this.mod).subscribe(data=>{
          this.professeurs=data
        });
      }
        SearchByProfAndModule(page:number=0) {
          
          this.professeurClasseModuleService.findByModuleandProf(page,this.mod,this.prof).subscribe(data=>{
            for (let index = 0; index < data.results.length; index++) {
              this.dataClasses.push({value:`${data.results[index].id}`,label:`${data.results[index].libelle}`})}
            this.classes=data
          });
        }
          SearchByProf() {
            console.log(this.prof);
          }
    onSubmit() {
   
      const {...cours} = this.form.value
          this.coursService.add(cours).subscribe(data=>{
            if(data.status==201){
              this.form.reset();
              this.router.navigateByUrl("/cours")
           }
                
          });
    }
    form=this.fb.group({
      classes: [[],[Validators.required]],
      professeur: [0,[Validators.required]],
      module:[0,[Validators.required]],
      semestre:[0,[Validators.required]],
      nbreHeureGlobal: [0,[Validators.required]],
    },{validator:this.validateQteCmde()})
    
      ngOnInit(): void {
        this.refresh();
      }
     
      refresh(page:number=0){
        this.classeService.findAll(page).subscribe(data=>{
          this.classes=data
         
        });
        this.classeService.findAll(page).subscribe(data=>{
          this.classes=data;
        
         
        });
        this.semestreService.findAll(page).subscribe(data=>{
          this.semestres=data
         
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
      validateQteCmde():ValidatorFn{
        return (form:AbstractControl):ValidationErrors|null=>{
           const nbreHeureGlobal=form.get("nbreHeureGlobal")?.value
           if(isNaN(Number.parseInt(nbreHeureGlobal))){
               return {'isNotNumber':true}
           }
            if(Number.parseInt(nbreHeureGlobal)<=10){
                return {'qteNotValid':true}
            }
    
          return null;
        };
    }
}
