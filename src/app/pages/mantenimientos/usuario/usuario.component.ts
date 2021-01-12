import  Swal  from 'sweetalert2';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { BuscarService } from '../../../services/buscar.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
 public totalUsuarios: number = 0;
 public usuario: Usuario [] = [];
 public temp: Usuario [] = [];
 public contador: number = 0
 public mostrar: boolean = true;
  constructor(private usuarioService: UsuarioService, private buscar: BuscarService) { }

  ngOnInit(): void {
this.cargarUsuario();
  }
  cargarUsuario(){
    this.mostrar = true;
    this.usuarioService.cargarUsuarios(this.contador).subscribe(({todo, usuarios})=> {
      this.totalUsuarios = todo;
    this.temp = usuarios;
        this.usuario= usuarios;
        this.mostrar = false;

    })
  }
cambiar(valor: number){
this.contador += valor;
if (this.contador < 0) {
this.contador = 0;
}else if(this.contador > this.totalUsuarios){
  this.contador -= valor;
}
this.cargarUsuario();
}
buscando(termino:string){
  if(termino.length === 0){
    return this.usuario = this.temp;
  }
  this.buscar.buscando('usuarios',termino).subscribe(resp =>{
this.usuario = resp;
  })

}
eliminarUsuario( usuarios: Usuario ) {
if(usuarios.uid === this.usuarioService.uid){
  return Swal.fire('Error', 'No puede modificar este usuario', 'error')
}
Swal.fire({
  title: '¿Esta seguro de eliminarlo?',
  text: `al usuairo ${usuarios.nombre}`,
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Si, borrarlo!'
}).then((result) => {
  if (result.value) {
    this.usuarioService.eliminarUsuario(usuarios).subscribe(resp => {
      this.cargarUsuario();
 Swal.fire('Se borro al siguiente usuario', `${usuarios.nombre} se elimino`, 'success');
    });
    }
});

}
cambiando(usuarios:Usuario){
this.usuarioService.guardarUsuario(usuarios).subscribe( resp => {
console.log(resp);
})
}
}
