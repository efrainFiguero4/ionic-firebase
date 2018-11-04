import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
	{ path: '',  component: UsuarioComponent }
]


@NgModule({
	imports: [
		CommonModule,
		IonicModule.forRoot(),
		RouterModule.forChild(routes)
	],
	declarations: [UsuarioComponent]
})
export class UsuarioModule { }
