import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: FormularioComponent }
]

@NgModule({
	imports: [
		IonicModule.forRoot(),
		RouterModule.forChild(routes),
		CommonModule, FormsModule, ReactiveFormsModule
	],
	declarations: [FormularioComponent]
})

export class FormularioModule { }
