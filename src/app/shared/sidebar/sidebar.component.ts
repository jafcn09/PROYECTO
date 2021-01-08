import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usuario: Usuario
  menuItems: any[];
   public imagUrl ='';

  constructor(private sidebarService: SidebarService, private usuarioService: UsuarioService) {
   this.imagUrl = this.usuarioService.usuario.foto;
   this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
  }

}
