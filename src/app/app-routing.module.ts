import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'usuario', pathMatch: 'full' },
	{ path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioModule' },
	{ path: 'nuevo', loadChildren: './pages/formulario/formulario.module#FormularioModule' },
	{ path: 'editar/:id', loadChildren: './pages/formulario/formulario.module#FormularioModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
