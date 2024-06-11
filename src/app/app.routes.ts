import { Routes } from '@angular/router';
import { AnneeScolairesComponent } from './pages/anneeScolaire/annee-scolaires/annee-scolaires.component';
import { RolesComponent } from './pages/role/roles/roles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoursListeComponent } from './pages/cours/cours-liste/cours-liste.component';
import { ClasseListeComponent } from './pages/classe/classe-liste/classe-liste.component';
import { ProfesseurListeComponent } from './pages/professeur/professeur-liste/professeur-liste.component';
import { SalleListeComponent } from './pages/salles/salle-liste/salle-liste.component';
import { SessionListeComponent } from './pages/sessions/session-liste/session-liste.component';
import { ModuleListeComponent } from './pages/modules/module-liste/module-liste.component';
import { EtudiantListeComponent } from './pages/etudiants/etudiant-liste/etudiant-liste.component';
import { SemestreListeComponent } from './pages/semestre/semestre-liste/semestre-liste.component';
import path from 'node:path';
import { AnneeScolaireFormComponent } from './pages/anneeScolaire/annee-scolaire-form/annee-scolaire-form.component';
import { ClasseFormComponent } from './pages/classe/classe-form/classe-form.component';
import { SalleFormComponent } from './pages/salles/salle-form/salle-form.component';
import { ModuleFormComponent } from './pages/modules/module-form/module-form.component';
import { ProfesseurFormComponent } from './pages/professeur/professeur-form/professeur-form.component';
import { EtudiantFormComponent } from './pages/etudiants/etudiant-form/etudiant-form.component';
import { ProfesseurClasseModulesFormComponent } from './pages/professeur/professeur-classe-modules-form/professeur-classe-modules-form.component';
import { FormCoursComponent } from './pages/cours/form-cours/form-cours.component';
import { SessionFormComponent } from './pages/sessions/session-form/session-form.component';
import { SessionProfesseurComponent } from './pages/professeur/session-professeur/session-professeur.component';
import { DashbordComponent } from './pages/page-not-found/dashbord/dashbord.component';
import { LoginComponent } from './pages/login/login.component';
import { CoursforprofComponent } from './pages/professeur/coursforprof/coursforprof.component';


export const routes: Routes = [
    {
        path: "anneeScolaires",
        children:[
            { 
                path:"",
                component:AnneeScolairesComponent
            },
            {
                path:"form",
                component:AnneeScolaireFormComponent
            }
           

        ]
       
    },
    {
        path: "classes",
        children:[
            { 
                path:"",
                component:ClasseListeComponent
            },
            {
                path:"form",
                component:ClasseFormComponent
            }
           

        ]
       
    },
    {
        path: "salles",
        children:[
            { 
                path:"",
                component:SalleListeComponent
            },
            {
                path:"form",
                component:SalleFormComponent
            }
           

        ]
       
    },
    {
        path: "modules",
        children:[
            { 
                path:"",
                component:ModuleListeComponent
            },
            {
                path:"form",
                component:ModuleFormComponent
            }
           

        ]
       
    },
    {
        path: "professeurs",
        children:[
            { 
                path:"",
                component:ProfesseurListeComponent
            },
            {
                path:"form",
                component:ProfesseurFormComponent
            },
            {
                path:"classe",
                component:ProfesseurClasseModulesFormComponent
            }
           

        ]
       
    },
    {
        path: "etudiants/:id",
        children:[
            { 
                path:"",
                component:EtudiantListeComponent
            },
            {
                path:"form",
                component:EtudiantFormComponent
            }
           

        ]
       
    },
   
    {
        path: "semestres",
        component: SemestreListeComponent
    },
    {
        path: "dashbord",
        component: DashbordComponent
    },
   
    {
        path: "cours",
        component: CoursListeComponent
    },
    {
        path: "coursProfesseur",
        component: CoursforprofComponent
    },
    {
        path: "newCours",
        component: FormCoursComponent
    },
    {
        path: "session/:id",
        component: SessionListeComponent
    },
    
    {
        path: "newSession",
        component: SessionFormComponent
    },
    {
        path: "sessionProfesseur",
        component: SessionProfesseurComponent
    },
    {
        path:"login",
        component:LoginComponent

      },
    {path:'',
        redirectTo:'/login',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];
