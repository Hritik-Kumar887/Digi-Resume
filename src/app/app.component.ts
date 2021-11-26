import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { AlertService } from './services/alert-service';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="this.loginForm.valid && login()" [formGroup]="this.loginForm" class="overlay" fxLayoutAlign="center center" fxLayout="column" fxLayoutGap="30px">
      <div style="width: 100%;" fxLayoutAlign="center center" fxLayout="row" fxLayoutGap="20px">
        <img width="98rem" src="../assets/headhunting.png" alt="logo">
        <h1 id="logoName">Digi-Resume</h1>
      </div>
      <mat-card fxLayout="column">
        <h2 style="font-family: cursive; color: #4a80aa; font-weight: bold;">
          Login
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
          <input formControlName="confirm_password" matInput placeholder="Confirm Password">
          <mat-error>Confirm Password is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="job_category" matInput placeholder="Job Category">
          <mat-error>Job Category is required</mat-error>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input formControlName="experience_level" matInput placeholder="Your Experience">
          <mat-error>Experience Level is required</mat-error>
        </mat-form-field>
        <br>
        <a style="margin-top: 0.7rem" href="#">Forgot Password?</a>
        <div style="margin-top: 2rem;" fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
        <mat-spinner *ngIf="this.loading" diameter="40" color="accent"></mat-spinner>
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
      background-image: url(../assets/logbackgroundd.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    #logoName{
      font-family: cursive;
      font-weight: bolder;
      /* font-size: 2em; */
      font-size: 32px;
      color: #f6f6f6;
    }
    mat-card{
      height : 41rem;
      width : 34rem;
      padding : 1.3rem;
    }
    button{
      color : white !important;
    }
  `]
})
export class AppComponent {
  title = 'angular-course';
  loginForm : FormGroup;
  loading = false;

  constructor(private apiService: ApiService, private alertService: AlertService){
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
      confirm_password: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
    });
    // this.apiService.getUsers().subscribe(data=>{
    //   this.alertService.success('done!');
    // }, (error=>{
    //   console.log(error, 'app component');
    // }));

  }

  login(){
    
  }

  signup(){
    this.loading = true;
    this.apiService.signup(this.loginForm.value).subscribe((data)=>{
      console.log(data);
      this.loading = false;
      this.alertService.success('Signup successful');
    }, (error)=>{
      console.log(error);
      this.loading = false;
    });
  }
}
