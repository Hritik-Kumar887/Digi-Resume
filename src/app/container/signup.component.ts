import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "../services/alert-service";
import { ApiService } from "../services/api-service";

@Component({
    selector: 'app-signup',
    template: `
    <form (ngSubmit)="this.signupForm.valid && signup()" [formGroup]="this.signupForm" class="overlay" fxLayoutAlign="center center" fxLayout="column" fxLayoutGap="30px">
      <div style="width: 100%;" fxLayoutAlign="center center" fxLayout="row" fxLayoutGap="20px">
        <img width="128rem" src="../assets/headhunting.png" alt="logo">
        <h1 id="logoName">Digi-Resume</h1>
      </div>
      <mat-card fxLayout="column">
        <h2 style="font-family: cursive; color: #4a80aa; font-weight: bold;">
          Signup
        </h2>
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Your Name">
          <mat-error>Name is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="email" matInput type="email" placeholder="Email">
          <mat-error>Valid email-id is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="password" matInput type="password" placeholder="Password">
          <mat-error>Valid password is required (8-14 digits)</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="confirm_password" matInput type="password" placeholder="Confirm Password">
          <mat-error>Confirm password is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="job_category" matInput placeholder="Your Job Category">
          <mat-error>Job-Category is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="experience_level" matInput placeholder="Your Experience Level">
          <mat-error>Experience Level is required</mat-error>
        </mat-form-field>
        <div style="margin-top: 2rem;" fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
        <mat-spinner *ngIf="this.loading" diameter="40" color="accent"></mat-spinner>
        <button (click)="login()" type="button" mat-raised-button color="primary">Back</button>
        <button type="submit" mat-raised-button color="accent">Signup</button>
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
      height : 38.2rem;
      width : 30rem;
      padding : 1.3rem;
    }
    button{
      color : white !important;
    }
    `]
})

export class SignupComponent{
    signupForm : FormGroup;
    loading = false;
    constructor(private apiService: ApiService, private alertService: AlertService, private router: Router){
        this.signupForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
            confirm_password: new FormControl(null,[Validators.required]),
            name: new FormControl(null,[Validators.required]),
            job_category: new FormControl(null,[Validators.required]),
            experience_level: new FormControl(null,[Validators.required]),
        }); 
    }

    login(){
        this.router.navigate(['login']);
    }

    signup(){
        this.loading = true;
        this.apiService.signup(this.signupForm.value).subscribe((data)=>{
        console.log(data);
        this.loading = false;
        this.alertService.success('Signup successful');
        this.router.navigate(['login']);
        }, (error)=>{
        console.log(error);
        this.loading = false;
        });
    }
}