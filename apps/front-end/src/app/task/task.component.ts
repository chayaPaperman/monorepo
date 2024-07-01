import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.module';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../_services/client.service';
import { Client } from '../_models/client.module';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  users: User[] = [];
  clients: Client[] = [];
  // items: MenuItem[] | undefined;
  items: any[] = [];
  cities!: any[];

  formGroupClient!: FormGroup;
  formGroupUser!: FormGroup;
  formGroupStatus!: FormGroup;

  constructor(
    private userSErvice: UserService,
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.userSErvice.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    //
    this.clientService.getAllClients().subscribe({
      next: (dataClients) => {
        console.log(dataClients);
        this.clients = dataClients;
      },
      error: (errClients) => {
        console.log(errClients);
      },
    });

    //
    this.items = [
      {
        separator: true,
      },
      {
        label: 'NOT STARTED',
        items: [
          {
            label: 'To Do',
            icon: 'pi pi pi-check',
            shortcut: '⌘+N',
            color: 'gray',
          },
        ],
      },
      {
        label: 'ACTIVE',
        items: [
          {
            label: 'In Progress',

            shortcut: '⌘+O',
            color: 'blue',
          },
          {
            label: 'Complete',
            icon: 'pi pi-check-circle',
            badge: '2',
            color: 'green',
          },
        ],
      },
      {
        separator: true,
      },
    ];
    // ----
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.formGroupClient = new FormGroup({
      selectedClient: new FormControl<any | null>(null),
    });
    this.formGroupUser = new FormGroup({
      selectedUser: new FormControl<any | null>(null),
    });
    this.formGroupStatus = new FormGroup({
      selectStatus: new FormControl<any | null>(null),
    });
  }

  // getColor(name: string): string {
  //   let hash = 0;
  //   for (let i = 0; i < name.length; i++) {
  //     hash = name.charCodeAt(i) + ((hash << 5) - hash);
  //   }
  //   let color = '#';
  //   for (let i = 0; i < 3; i++) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += ('00' + value.toString(16)).substr(-2);
  //   }
  //   return color;
  // }

  getColor(name: string): string {
    const hash = name
      .split('')
      .reduce((acc, char) => char.codePointAt(0)! + ((acc << 5) - acc), 0);
    const colorValues = Array(3)
      .fill(0)
      .map((_, i) => (hash >> (i * 8)) & 0xff);
    const color = `#${colorValues
      .map((value) => ('00' + value.toString(16)).substr(-2))
      .join('')}`;
    return color;
  }

  date1: Date | undefined;

  date2: Date | undefined;

  date3: Date | undefined;

  //
  checked: boolean = false;

  status() {
    alert('bhui');
    console.log(this.selectedClient);
    console.log(this.selectedUser);
    console.log(this.selectStatus);
    console.log(this.date2);
  }

  showStatus: boolean = false;
  showAssignees: boolean = false;
  showClients: boolean = false;

  //
  selectedCity!: any;
  selectedClient!: any;
  selectedUser!: any;
  selectStatus!: any;
  selectedColor: string = '#1976d2'; // צבע ברירת המחדל

  //
  ingredient!: string;
  //
  messages: Message[] | undefined;

  addMessages() {
    this.messages = [
      { severity: 'info', summary: 'Dynamic Info Message' },
      { severity: 'success', summary: 'Dynamic Success Message' },
      { severity: 'warn', summary: 'Dynamic Warning Message' },
    ];
  }

  clearMessages() {
    this.messages = [];
  }
  //
  text: string | undefined;
  //
  save(){
    

  }
  cancel(){

  }

  changeStatus(){
    this.selectStatus='complete'
  }
  //
  getSeverity(status: string) {
    // switch (status) {
    //   case 'INSTOCK':
    //     return 'success';
    //   case 'LOWSTOCK':
    //     return 'warning';
    //   case 'OUTOFSTOCK':
    //     return 'danger';
    // }
  }
}
