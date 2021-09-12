import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCandidatComponent } from './private/admin/gestionCandidature/list-candidat/list-candidat.component';
import { ProfilCandidatComponent } from './private/admin/gestionCandidature/profil-candidat/profil-candidat.component';
import { CreerCompteComponent } from './private/admin/gestionCompte/creer-compte/creer-compte.component';
import { ListCompteComponent } from './private/admin/gestionCompte/list-compte/list-compte.component';
import { ListRequestComponent } from './private/admin/gestionConge/list-request/list-request.component';
import { RequestForVacationComponent } from './private/admin/gestionConge/request-for-vacation/request-for-vacation.component';
import { ReviewVacationComponent } from './private/admin/gestionConge/review-vacation/review-vacation.component';
import { DepensesComponent } from './private/admin/gestionDepense/depenses/depenses.component';
import { AddEmployeeComponent } from './private/admin/gestionEmpl/add-employee/add-employee.component';
import { ArchivedEmployeesComponent } from './private/admin/gestionEmpl/archived-employees/archived-employees.component';
import { ListEmployeesComponent } from './private/admin/gestionEmpl/list-employees/list-employees.component';
import { UpdateEmployeeComponent } from './private/admin/gestionEmpl/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './private/admin/gestionEmpl/view-employee/view-employee.component';
import { AddMeetingComponent } from './private/admin/gestionMeeting/add-meeting/add-meeting.component';
import { ListMeetingComponent } from './private/admin/gestionMeeting/list-meeting/list-meeting.component';
import { UpdateMeetingComponent } from './private/admin/gestionMeeting/update-meeting/update-meeting.component';
import { TodoAddComponent } from './private/admin/gestionTache/todo-add/todo-add.component';
import { TodoListComponent } from './private/admin/gestionTache/todo-list/todo-list.component';
import { EmplProfilComponent } from './private/employee/empl-profil/empl-profil.component';
import { ListVacationComponent } from './private/employee/vacation/list-vacation/list-vacation.component';
import { RequestVacationComponent } from './private/employee/vacation/request-vacation/request-vacation.component';
import { DashboardComponent } from './private/shared/dashboard/dashboard.component';
import { SettingsComponent } from './private/shared/settings/settings.component';
import { UpdateProfilComponent } from './private/shared/update-profil/update-profil.component';
import { CandidatAreaComponent } from './public/candidat-area/candidat-area.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/shared/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'list-candidat',
    component:ListCandidatComponent
  },
  {
    path:'profil-candidat',
    component:ProfilCandidatComponent
  },
  {
    path:'creer-compte',
    component:CreerCompteComponent
  },
  {
    path:'list-compte',
    component:ListCompteComponent
  },
  {
    path:'list-request',
    component:ListRequestComponent
  },
  {
    path:'request-for-vacation',
    component:RequestForVacationComponent
  },
  {
    path:'review-vacation',
    component:ReviewVacationComponent
  },
  {
    path:'depenses',
    component:DepensesComponent
  },
  {
    path:'add-employee',
    component:AddEmployeeComponent
  },
  {
    path:'archived-employees',
    component:ArchivedEmployeesComponent
  },
  {
    path:'list-employees',
    component:ListEmployeesComponent
  },
  {
    path:'update-employee',
    component:UpdateEmployeeComponent
  },
  {
    path:'view-employee',
    component:ViewEmployeeComponent
  },
  {
    path:'add-meeting',
    component:AddMeetingComponent
  },
  {
    path:'list-meeting',
    component:ListMeetingComponent
  },
  {
    path:'update-meeting',
    component:UpdateMeetingComponent
  },
  {
    path:'todo-add',
    component:TodoAddComponent
  },
  {
    path:'todo-list',
    component:TodoListComponent
  },
  {
    path:'update-profil',
    component:UpdateProfilComponent
  },
  {
    path:'empl-profil',
    component:EmplProfilComponent
  },
  {
    path:'list-vacation',
    component:ListVacationComponent
  },
  {
    path:'request-vacation',
    component:RequestVacationComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'candidat-area',
    component:CandidatAreaComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'list-compte',
    component:ListCompteComponent
  },
  {
    path:'creer-compte',
    component:CreerCompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
