import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard', /**cambia el nombre de menu */
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Main', url: '/'
        },
        {
          titulo: 'ProgressBar', url: 'progress'
        },
        {
          titulo: 'Gráficas', url: 'grafica1'
        },
        {
          titulo: 'Promesas', url: 'promesas'
        },
        {
          titulo: 'RxJs', url: 'rxjs'
        }
      ]
    },
    {
      titulo: 'Mantenimiento', /**cambia el nombre de menu */
      icono: 'mdi mdi-folder',
      submenu: [
        {
          titulo: 'Usuario', url: 'usuario'
        },
        {
          titulo: 'Hospital', url: 'hospitales'
        },
        {
          titulo: 'Medico', url: 'medicos'
        },
      ]
    }
  ]

  constructor() { }
}
