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
        <img width="12%" src="../assets/headhunting.png" alt="logo">
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
      font-size: 42px;
      color: #f6f6f6;
    }
    mat-card{
      height : 20rem;
      width : 28rem;
    }
    button{
      color : white !important;
    }
  `]
})
export class AppComponent {
  title = 'angular-course';
  loginForm : FormGroup;
  mySubject = new BehaviorSubject('hello world!');
  // myObsever!: Observable<any>;

  constructor(private apiService: ApiService, private alertService: AlertService){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
    });
    this.apiService.getUsers().subscribe(data=>{
      this.alertService.success('done!');
    }, error=>{
      this.alertService.error(error.message);
    });
    const observer = this.loginForm.valueChanges.pipe(map(data=>data.email), debounceTime(500), distinctUntilChanged());
    observer.subscribe(data=>{
      console.log(data);
    })
  }

  login(){
    // using map
    // observable is throwing -> email & password
    /*const mapObserver = this.loginForm.valueChanges.pipe(map((data: { email: any; }) => {
      return data.email;
    }));
    mapObserver.subscribe(data => {
      console.log(data);
    })*/

    // using filter
    /*const filterObserver = this.loginForm.valueChanges.pipe(filter(data => {
      return data.email === 'ritik@ab.com'
    }))
    filterObserver.subscribe(data=>console.log(data))*/

    // this.mySubject.next(this.loginForm.value);
    
  }

  signup(){
    // this.mySubject.subscribe(data=>{
    //   console.log(data);
    // })
    // console.log(this.mySubject.getValue());
    
  }
}
