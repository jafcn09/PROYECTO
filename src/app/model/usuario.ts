import { environment } from './../../environments/environment';
const base_url = environment.base_url;
export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public foto?: string,
    public google?: boolean,
    public role?: string,
    public uid?: string
  ){}
  get FotoUrl() {
    // /upload/usuarios/no-imgage
    if(this.foto.includes('https')) {
      return this.foto;
    }
    if(this.foto) {
      return `${base_url}/uploads/usuarios/${this.foto}`;
    } else {
      return `${base_url}/uploads/usuarios/no-image`;
    }
  }
}
