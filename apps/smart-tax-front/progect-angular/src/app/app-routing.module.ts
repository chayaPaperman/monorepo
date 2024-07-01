import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ClientNavbarComponent } from './pages/client/client-navbar/client-navbar.component';
import { CommunicationLogsComponent } from './pages/client/communication-logs/communication-logs.component';
import { TaskManagementComponent } from './pages/client/task-management/task-management.component';
import { BillingsComponent } from './pages/client/billings/billings.component';
import { ClientManagementComponent } from './pages/client/client-management/client-management.component';
import { UploadDocComponent } from './pages/client/upload-doc/upload-doc.component';
import { ForgotPasswordComponent } from './forget-password/forget-password.component';
import { RestartPasswordComponent } from './restart-password/restart-password.component';
import { AuthGuard } from './auth.guard';
import { ClientSearchComponent } from './pages/client/client-search/client-search.component';
import { ClientProfileComponent } from './pages/client/client-profile/client-profile.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { TaskComponent } from './task/task.component';
import { CommunicationClientComponent } from './pages/client/communication-client/communication-client.component';

// Define the routes for the application
const routes: Routes = [
  
  { path: 'home', component: HomeComponent }, // Route for the home page
  { path: 'login', component: LoginComponent }, // Route for the login page
  /*for develope:*/
  { path: 'register', component: RegisterComponent  }, // Route for the registration page
  /*for user:*/
  //{ path: 'register', component: RegisterComponent,  canActivate: [AuthGuard], data: { authType: 'admin' }  },
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard], data: { authType: 3 } }, // Route for the user board page, requires authentication with the 'user' role
  { path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard], data: { authType: 6 } }, // Route for the moderator board page, requires authentication with the 'moderator' role
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard], data: { authType: 3 } }, // Route for the admin board page, requires authentication with the 'admin' role
  { path: 'task', component: TaskManagementComponent, canActivate: [AuthGuard], data: { authType: 6 } }, // Route for the task management page, requires authentication with the 'user' role
  { path: 'taskSpe', component: TaskComponent},
  { path: 'forget-password', component: ForgotPasswordComponent , data: { authType: 6 }}, // Route for the forgot password page
  { path: 'restartPassword', component: RestartPasswordComponent }, // Route for the restart password page, requires authentication with the 'user' role
  { path: 'reports',component: ReportsComponent, //Route for the reports
    children: [
      {path: 'task-report', component: TaskReportComponent}
    ]}, 
    { path: 'communicationLogs', component: CommunicationLogsComponent},

    { 
      path: 'clientSearch', 
      component: ClientSearchComponent ,
    },
    { 
      path: 'clientSearch/clientManagement', 
      component: ClientManagementComponent,
      children: [
        { path: 'clientProfile', component: ClientProfileComponent },
        { 
          path: 'clientNavbar', 
          component: ClientNavbarComponent,
          children: [
            { path: 'CommunicationClient', component: CommunicationClientComponent },
            { path: 'uploadDoc', component: UploadDocComponent },
            { path: 'taskManagement', component: TaskManagementComponent },
            { path: 'billings', component: BillingsComponent }
          ]
        }
      ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  