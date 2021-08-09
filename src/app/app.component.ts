import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <h1>Hello!</h1>
    <button mat-raised-button color="accent">Login</button>
    <button mat-raised-button color="accent">Signup</button>
    <button mat-raised-button color="accent">Contact</button>
  </mat-toolbar>
  <mat-card class="myCard">
  <mat-card-header>
    <div mat-card-avatar class="header-image"></div>
    <mat-card-title>Hritik Sultania</mat-card-title>
    <mat-card-subtitle>Developer</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxwcm9ncmFtbWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="programmer">
  <mat-card-content>
    <p>
      Hritik has been working as a senior javascipt-developer since last 4 years and has been in the
      leading role at various projects working at more than seven companies. He originally hails from
      Rajasthan, India.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
  </mat-card>
  <!-- <input (input)="getUserName($event)" type="text" placeholder="Enter Username">
  <button (click)='saveUserName()'>Save Name</button> -->
  <!-- <h2>Your userName is: {{displayName}}</h2> -->

  <!-- <input [(ngModel)]="newName" type="text" placeholder="Enter Name">
  <h2>Your userName is: {{newName}}</h2> -->
  <!-- <button mat-raised-button color="primary" (click)='changeName()'>Change Name</button> -->
  <!-- <button (click)="toggleButton()" [disabled]='isButtonDisabled'>{{isButtonDisabled ? 'Enable Me' : 'Disable Me'}}</button>
  <button (click)="this.isButtonDisabled = false">Enable button</button> -->
  <!-- <app-abc></app-abc> -->
  <app-video (editVideo)="onEdit()" title="video 1" desc="video1 desc" url="#"></app-video>
  <app-video title="video 2" desc="video2 desc" url="#"></app-video>
  <br>
  <br>
  
  <form class="example-form">
  <div fxLayout="row" fxLayoutGap="20px">
  <mat-form-field fxFlex="20%" appearance="fill">
    <mat-label>First name</mat-label>
    <input matInput placeholder="Ex. Tony">
  </mat-form-field>
  <mat-form-field fxFlex="45%" appearance="fill">
    <mat-label>Last name</mat-label>
    <input matInput placeholder="Ex. Stark">
  </mat-form-field>
  </div>
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Leave a comment</mat-label>
    <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
  </mat-form-field>
</form>
    `,
  styles: [`
  .example-form{
    background : #bf9dfb;
    padding-top : 8px;
  }

  .header-image{
    background-image : url('https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
  }

  .myCard{
    max-width : 400px;
    margin-top : 14px;
    margin-left : 14px;
  }

  img{
    background-size : cover; 
  }

  .example-full-width{
    width : 40vw;
  }

  h1{
    color: #d0ace6;
  }
  h2{
    color: orange;
  }
  button{
    margin-left : 18px;
  }
  `]
})
export class AppComponent {
  title = 'angular-course';
  userName = '';
  displayName = '';
  // newName = '';
  userid = 10;
  isButtonDisabled = false;

  // toggleButton(){
  //   this.isButtonDisabled = !this.isButtonDisabled;
  // }

  // getUserName(data:any){
  //   this.userName = data.target.value;
  // }

  // saveUserName(){
  //   this.displayName = this.userName;
  // }

  // changeName(){
  //   this.newName = 'i am a new value';
  // }

  onEdit(){
    console.log('called edit button');
  }

}
