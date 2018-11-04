import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario, FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit, OnDestroy {

	constructor(private _router: Router, private _firebase: FirebaseService) { }

	ls_usuarios: Usuario[];
	destroy: Subject<boolean> = new Subject<boolean>();

	ngOnInit() {
		this.get_usuarios()
	}

	ngOnDestroy() {
		this.destroy.next();
		this.destroy.complete();
	}

	get_usuarios() {
		this._firebase.get_usuarios().pipe(takeUntil(this.destroy)).subscribe(resp => {
			this.ls_usuarios = resp;
		}, error => console.log(error), () => console.log("complete"))
	}

	go_eliminarusuario(usuario: Usuario) {
		this._firebase.delete_usuario(usuario).then(resp => {
			console.log("usuario eliminado");
		})
	}
}
