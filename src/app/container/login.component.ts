import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from "../services/alert-service";
import { ApiService } from "../services/api-service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    template: `
        <form (ngSubmit)="this.loginForm.valid && login()" [formGroup]="this.loginForm" class="overlay" fxLayoutAlign="center center" fxLayout="column" fxLayoutGap="30px">
      <div style="width: 100%;" fxLayoutAlign="center center" fxLayout="row" fxLayoutGap="20px">
        <img width="128rem" src="../assets/headhunting.png" alt="logo">
        <h1 id="logoName">Digi-Resume</h1>
      </div>
      <mat-card fxLayout="column">
        <h2 style="font-family: cursive; color: #4a80aa; font-weight: bold;">
          Login
        </h2>
        <mat-form-field>
          <input formControlName="email" matInput type="email" placeholder="Email">
          <mat-error>Valid email-id is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="password" matInput type="password" placeholder="Password">
          <mat-error>Valid password is required (8-14 digits)</mat-error>
        </mat-form-field>
        <a style="margin-top: 0.7rem" href="#">Forgot Password?</a>
        <div style="margin-top: 2rem;" fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
        <mat-spinner *ngIf="this.loading" diameter="40" color="primary"></mat-spinner>
        <button type="submit" mat-raised-button color="primary">Login</button>
        <button (click)="signup()" type="button" mat-raised-button color="accent">Signup</button>
        </div>
      </mat-card>
    </form>
    `,
    styles: [`
    .overlay{
      width : 100%;
      height : 100%;
      background : url("../../assets/backgrnd.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    #logoName{
      font-family: cursive;
      font-weight: bolder;
      font-size: 32px;
      color: #e4f6fffc;
    }
    mat-card{
      height : 20.7rem;
      width : 29rem;
      padding : 1.3rem;
    }
    button{
      color : white !important;
    }
    `]
})

export class LoginComponent {
    loginForm : FormGroup;
    loading = false;

    constructor(private apiService: ApiService, private alertService: AlertService, private router: Router){
        this.loginForm = new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
        });
    }

    login(){
        this.loading = true;
        const request$ = this.apiService.login(this.loginForm.value)
        request$.subscribe(data=>{
        console.log(data);
        this.loading = false;
        this.alertService.success('You are logged in')
        },(err)=>{
        console.log(err);
        this.loading = false;
        })
    }

    signup(){
        this.router.navigate(['signup']);  
        //we are using this navigate to change our route
    };
}


