import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SessionServiceService } from '../../../services/impl/session-service.service';
import { Router } from '@angular/router';
import { RestResponse } from '../../../core/models/rest.response';
import { DtoRequestCalendar } from '../../../core/models/sessionCours.response';
import { title } from 'node:process';
import { ba } from '@fullcalendar/core/internal-common';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { MenuComponent } from '../../menu/menu.component';


@Component({
  selector: 'app-session-professeur',
  standalone: true,
  imports: [FullCalendarModule,CommonModule,MenuComponent],
  templateUrl: './session-professeur.component.html',
  styleUrl: './session-professeur.component.css'
})
export class SessionProfesseurComponent implements OnInit {
  calendarOptions: CalendarOptions={
    initialView:'timeGridWeek',
    plugins:[timeGridPlugin],
    events:[SweetAlert2Module],
    eventClick:(event:any) => {
      for (let index = 0; index < this.response?.results.length!; index++) {
        const e = this.response?.results[index];
        if (+event.event._def.publicId== +e!.id) {
         
           const swalWithBooststrapButtons = Swal.mixin(
            {
              customClass:{
                confirmButton: "ml-2 bg-green-400 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-2 border-green-400",
                cancelButton: "bg-red-400 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 mr-3",
              },
              buttonsStyling:false,
            }
           );
          //  if (this) {
            
          //  }
          swalWithBooststrapButtons.fire({
                 title:"ACTION",
                 html:`Module:  ${e?.module}  lieu: ${e?.lieu}  </br> date: ${e?.date} | duree: ${e?.duree} </br> a Classes: ${e?.classeList} |`,
                 showCancelButton:true,
                 confirmButtonText:"Anuller",
                 cancelButtonText:"Retour",
                 reverseButtons:true,
          })
          .then((result) => {
            console.log(e?.isArchived);
            if(result.isConfirmed){
              if(e?.isArchived==1 ){
                swalWithBooststrapButtons.fire(
                  {
                    title:"CONFIRMER ANNULATION",
                    text:"Vous etes sur le point d'annuler la session",
                    icon:"warning",
                  
                  }
                );
              
                this.sessionService.annuler(0,e.id).subscribe(data => {
                  console.log(data)
                    
                      this.router.navigateByUrl("/sessionProfesseur")
                    
                });
              }
            }
          });
       
          
        }
        
      }
    }
  };
events: EventSourceInput|null|undefined;
  constructor(private sessionService: SessionServiceService ,
    private router:Router,
    
    ){
    
  }
  response?:RestResponse<DtoRequestCalendar[]>;
  entity:any="";
  mySessions:any[]=[];
  ngOnInit(): void {
   this.initEvent();
  }
  initEvent() {

    this.sessionService.getSessionByUsername(localStorage.getItem('auth')!).subscribe(data =>{
      this.response = data;
      if(this.response.status == 200){
        for (let index = 0; index < this.response.results.length; index++) {
          const a = this.response.results[index];
          
          this.mySessions.push({ id:`${a.id}`,
                                start:`${a.date}T${a.debut}`,
                                end:`${a.date}T${a.fin}`,
                                title:`${a.module} - ${a.professeur} - ${a.lieu}`,
                                
                      })
            
        };
       this.calendarOptions.events =this.mySessions
       this.events=this.mySessions;
    
      }
    });
  }

}
