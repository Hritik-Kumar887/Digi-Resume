import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-video',
    template: `
    <mat-toolbar style="background: #d5ceff;">
        <mat-toolbar-row><h1>{{title}}</h1></mat-toolbar-row>
        <mat-toolbar-row><h1>{{desc}}</h1></mat-toolbar-row>
        </mat-toolbar>
        <a [href]="url">Click here to watch</a>
        <button mat-raised-button color="primary" (click)="onClick()">Edit Video</button>
    `,
    styles: [`
    button{
        margin-left : 8px;
    }
    h1{
        color : #7b1fa2
    }

    a{
        margin-left : 12px;
    }

    `]
})

export class VideoComponent{
    @Input() title: any;
    @Input() desc: any;
    @Input() url: any;
    @Output() editVideo = new EventEmitter();

    onClick(){
        this.editVideo.emit(this.title); 
    }
}