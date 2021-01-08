
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public imgUrl = '';
  public usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {
    this.imgUrl = this.usuarioService.usuario.foto;
    console.log(this.imgUrl)
    this.usuario = usuarioService.usuario;
    console.log(this.usuario)
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.usuarioService.logout();
  }

}
