import  Swal  from 'sweetalert2';
import { BaseService } from 'src/app/services/base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [
  ]
})
export class UploadComponent implements OnInit {
public perfil: FormGroup
public usuario: Usuario
public subirFoto: File;
public imgTemp: any = '';
private isValidEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private f: FileService, private baseService: BaseService) {
    this.usuario = usuarioService.usuario;
   }

  ngOnInit(): void {
    this.perfil = this.fb.group({
      nombre:[this.usuario.nombre, Validators.required],
      email:[this.usuario.email,[Validators.required, Validators.email]]
    });
  }
  isValidf(field: string){
    return ((this.perfil.get(field).touched || this.perfil.get(field).dirty) && !this.perfil.get(field).valid);
  }
actualizarPerfil(){

  this.usuarioService.actualizarUsuario(this.perfil.value).subscribe(resp => {
    const{nombre,email} = this.perfil.value;
 this.usuario.nombre = nombre;
 this.usuario.email = email;
 Swal.fire('Guardados', 'los cambios se hicieron correctamente')
    }, (err =>  {
      console.log(err.error.msg);
      Swal.fire('Error', err.error.msg, 'error');
    }));

}
cambiarFoto(file: File) {
  this.subirFoto = file;

  if (!file) { return; }
  const reader = new FileReader();

  reader.onloadend = () => {
    this.imgTemp = reader.result;

  }
}
onSubirFoto() {
  this.f.actualizarFoto(this.subirFoto,'usuarios',this.usuario.uid).then(
    res => {

       this.usuario.foto = res;
    Swal.fire('Guardar', 'Todo salio bien')
      }).catch (err => {
        Swal.fire('Error', 'La imagen no se pudo subir');
      })
}

}
