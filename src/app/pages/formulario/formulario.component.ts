import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService, Usuario } from '../../services/firebase.service';
import { isNullOrUndefined } from 'util';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy {

	constructor(private _route: ActivatedRoute, private _router: Router, private _firebase: FirebaseService) { }

	id_usuario: number;
	accion: string;
	usuario = new Usuario();
	destroy: Subject<boolean> = new Subject<boolean>();

	ngOnInit() {
		this.id_usuario = this._route.snapshot.params["id"];
		if (!isNullOrUndefined(this.id_usuario)) {
			this.get_usuario(this.id_usuario);
			this.accion = "Editar"
		}
		else {
			this.usuario = new Usuario();
			this.accion = "Agregar"
		}
	}

	ngOnDestroy() {
		this.destroy.next();
		this.destroy.complete();
	}

	get_usuario(id: number) {
		this._firebase.get_usuario(id).pipe(takeUntil(this.destroy)).subscribe(usuario => {
			this.usuario = usuario;
		}, error => console.log(error), () => console.log("complete"))
	}

	guardar_usuario(usuario: Usuario) {
		if (!isNullOrUndefined(this.id_usuario)) {
			usuario.id = this.id_usuario;
			this._firebase.edit_usuario(usuario).then(resp => {
				this.go_back();
			})
		}
		else {
			usuario.id = Date.now();
			this._firebase.add_usuario(usuario).then(resp => {
				this.go_back();
			})
		}
	}

	go_back() {
		this._router.navigate(['usuario']);
	}

}
