import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { TaskManagementComponent } from './task-management/task-management.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChipsModule } from 'primeng/chips';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
// import { OrderListModule } from 'primeng/orderlist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
// import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { EditorModule } from 'primeng/editor';
import { SelectButtonModule } from 'primeng/selectbutton';
// import { MessageService, PrimeNGConfig} from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ChipModule } from 'primeng/chip';
import { TaskComponent } from './task/task.component';
import { ColorPickerComponentComponent } from './color-picker-component/color-picker-component.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { CommunicationService } from './_services/communicaton.service';
import { ClientProfileComponent } from './pages/client/client-profile/client-profile.component';
import { ClientSearchComponent } from './pages/client/client-search/client-search.component';
import { ClientService } from './_services/client.service';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating'; 
import { RestartPasswordComponent } from './restart-password/restart-password.component';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ClientNavbarComponent } from './pages/client/client-navbar/client-navbar.component';
import { CommunicationLogsComponent } from './pages/client/communication-logs/communication-logs.component';
import { ClientManagementComponent } from './pages/client/client-management/client-management.component';
import { UploadDocComponent } from './pages/client/upload-doc/upload-doc.component';
import { BillingsComponent } from './pages/client/billings/billings.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { DropdownModule } from 'primeng/dropdown';
import { ForgotPasswordComponent } from './forget-password/forget-password.component';
import { CommunicationClientComponent } from './pages/client/communication-client/communication-client.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ForgotPasswordComponent,
    TaskManagementComponent,
    TaskComponent,
    ColorPickerComponentComponent,
    
    ClientProfileComponent,
    ClientSearchComponent,
    RestartPasswordComponent,
    EmployeesTableComponent,
    RestartPasswordComponent,
    EmployeesTableComponent,
    ClientNavbarComponent,
    CommunicationLogsComponent,
    ClientManagementComponent,
    UploadDocComponent,
    TaskManagementComponent,
    BillingsComponent,
    UploadDocComponent,
    ReportsComponent,
    TaskReportComponent,
    CommunicationClientComponent,
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // ודאי להוסיף את ReactiveFormsModule לכאן
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    RippleModule,
    ListboxModule,
    CalendarModule,
    BrowserAnimationsModule,
    ChipsModule,
    InputGroupAddonModule,
    InputGroupModule,
    MessagesModule,
    // Message ,
    CheckboxModule,
    // OrderListModule,
    RadioButtonModule,
    DividerModule,
    TagModule,
    EditorModule,
    SelectButtonModule,
    FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule,
    ColorPickerModule,
    DropdownModule,
    ChipModule,
    TableModule,
    RatingModule,
    AutoCompleteModule

  ],
  providers: [httpInterceptorProviders, CommunicationService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }