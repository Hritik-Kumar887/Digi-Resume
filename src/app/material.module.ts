import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const data = [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
]

@NgModule({
    imports: data,
    exports: data, 
})

export class MaterialModule{ }