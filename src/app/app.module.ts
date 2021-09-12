import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { NavbarComponent } from './public/shared/navbar/navbar.component';
import { FooterComponent } from './public/shared/footer/footer.component';
import { DashboardComponent } from './private/shared/dashboard/dashboard.component';
import { CandidatAreaComponent } from './public/candidat-area/candidat-area.component';
import { SettingsComponent } from './private/shared/settings/settings.component';
import { RequestVacationComponent } from './private/employee/vacation/request-vacation/request-vacation.component';
import { ListVacationComponent } from './private/employee/vacation/list-vacation/list-vacation.component';
import { EmplProfilComponent } from './private/employee/empl-profil/empl-profil.component';
import { LoginComponent } from './public/shared/login/login.component';
import { ProfilCandidatComponent } from './private/admin/gestionCandidature/profil-candidat/profil-candidat.component';
import { ListCandidatComponent } from './private/admin/gestionCandidature/list-candidat/list-candidat.component';
import { ListCompteComponent } from './private/admin/gestionCompte/list-compte/list-compte.component';
import { CreerCompteComponent } from './private/admin/gestionCompte/creer-compte/creer-compte.component';
import { ReviewVacationComponent } from './private/admin/gestionConge/review-vacation/review-vacation.component';
import { ListRequestComponent } from './private/admin/gestionConge/list-request/list-request.component';
import { RequestForVacationComponent } from './private/admin/gestionConge/request-for-vacation/request-for-vacation.component';
import { AddMeetingComponent } from './private/admin/gestionMeeting/add-meeting/add-meeting.component';
import { ListMeetingComponent } from './private/admin/gestionMeeting/list-meeting/list-meeting.component';
import { UpdateMeetingComponent } from './private/admin/gestionMeeting/update-meeting/update-meeting.component';
import { DepensesComponent } from './private/admin/gestionDepense/depenses/depenses.component';
import { ListEmployeesComponent } from './private/admin/gestionEmpl/list-employees/list-employees.component';
import { ArchivedEmployeesComponent } from './private/admin/gestionEmpl/archived-employees/archived-employees.component';
import { AddEmployeeComponent } from './private/admin/gestionEmpl/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './private/admin/gestionEmpl/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './private/admin/gestionEmpl/update-employee/update-employee.component';
import { TodoListComponent } from './private/admin/gestionTache/todo-list/todo-list.component';
import { TodoAddComponent } from './private/admin/gestionTache/todo-add/todo-add.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { UpdateProfilComponent } from './private/shared/update-profil/update-profil.component';
import { SidebarComponent } from './private/shared/sidebar/sidebar.component';
import { TodoUpdateComponent } from './private/admin/gestionTache/todo-update/todo-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CandidatAreaComponent,
    SettingsComponent,
    RequestVacationComponent,
    ListVacationComponent,
    EmplProfilComponent,
    LoginComponent,
    SidebarComponent,
    ProfilCandidatComponent,
    ListCandidatComponent,
    ListCompteComponent,
    CreerCompteComponent,
    ReviewVacationComponent,
    ListRequestComponent,
    RequestForVacationComponent,
    AddMeetingComponent,
    ListMeetingComponent,
    UpdateMeetingComponent,
    DepensesComponent,
    ListEmployeesComponent,
    ArchivedEmployeesComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    TodoListComponent,
    TodoAddComponent,
    UpdateProfilComponent,
    TodoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
