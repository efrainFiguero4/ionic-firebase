import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario, FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

	constructor(private _router: Router, private _firebase: FirebaseService) { }

	ls_usuarios: Usuario[];

	ngOnInit() {
		this.get_usuarios()
	}

	get_usuarios() {
		this._firebase.get_usuarios().valueChanges().subscribe(resp => {
			this.ls_usuarios = resp;
			console.log(this.ls_usuarios);
		})
	}

	go_eliminarusuario(usuario: Usuario) {
		this._firebase.delete_usuario(usuario).then(resp => {
			console.log("usuario eliminado");
		})
	}
}
