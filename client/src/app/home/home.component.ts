import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users:any;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  registerModeToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode= event;
  }

}
