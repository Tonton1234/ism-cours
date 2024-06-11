import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { Cours } from '../../../core/models/cours.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { CoursServiceService } from '../../../services/impl/cours-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import {Chart}  from 'chart.js';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,FormsModule,MenuComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {
  optionSelectionnee: string = '';
  maFonction(arg0: string) {
    
    this.refresh(0,this.optionSelectionnee)
  }

  response?:RestResponse<Cours[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private  coursService:CoursServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page: number = 0, keyword: string=""){
    this.coursService.findAll(page,keyword).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }

  
  // var chartOne = document.getElementById('chartOne');
  //       var myChart = new Chart(chartOne, {
  //           type: 'bar',
  //           data: {
  //               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //               datasets: [{
  //                   label: '# of Votes',
  //                   data: [12, 19, 3, 5, 2, 3],
  //                   backgroundColor: [
  //                       'rgba(255, 99, 132, 0.2)',
  //                       'rgba(54, 162, 235, 0.2)',
  //                       'rgba(255, 206, 86, 0.2)',
  //                       'rgba(75, 192, 192, 0.2)',
  //                       'rgba(153, 102, 255, 0.2)',
  //                       'rgba(255, 159, 64, 0.2)'
  //                   ],
  //                   borderColor: [
  //                       'rgba(255, 99, 132, 1)',
  //                       'rgba(54, 162, 235, 1)',
  //                       'rgba(255, 206, 86, 1)',
  //                       'rgba(75, 192, 192, 1)',
  //                       'rgba(153, 102, 255, 1)',
  //                       'rgba(255, 159, 64, 1)'
  //                   ],
  //                   borderWidth: 1
  //               }]
  //           },
  //           options: {
  //               scales: {
  //                   yAxes: [{
  //                       ticks: {
  //                           beginAtZero: true
  //                       }
  //                   }]
  //               }
  //           }
  //       });

  //       var chartTwo = document.getElementById('chartTwo');
  //       var myLineChart = new Chart(chartTwo, {
  //           type: 'line',
  //           data: {
  //               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //               datasets: [{
  //                   label: '# of Votes',
  //                   data: [12, 19, 3, 5, 2, 3],
  //                   backgroundColor: [
  //                       'rgba(255, 99, 132, 0.2)',
  //                       'rgba(54, 162, 235, 0.2)',
  //                       'rgba(255, 206, 86, 0.2)',
  //                       'rgba(75, 192, 192, 0.2)',
  //                       'rgba(153, 102, 255, 0.2)',
  //                       'rgba(255, 159, 64, 0.2)'
  //                   ],
  //                   borderColor: [
  //                       'rgba(255, 99, 132, 1)',
  //                       'rgba(54, 162, 235, 1)',
  //                       'rgba(255, 206, 86, 1)',
  //                       'rgba(75, 192, 192, 1)',
  //                       'rgba(153, 102, 255, 1)',
  //                       'rgba(255, 159, 64, 1)'
  //                   ],
  //                   borderWidth: 1
  //               }]
  //           },
  //           options: {
  //               scales: {
  //                   yAxes: [{
  //                       ticks: {
  //                           beginAtZero: true
  //                       }
  //                   }]
  //               }
  //           }
  //       });
}
