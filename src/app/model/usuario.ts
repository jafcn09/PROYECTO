import { environment } from './../../environments/environment';
const base_url = environment.base_url;
export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public foto?: string,
    public google?: string,
    public role?: string,
    public uid?: string
  ){}
  get FotoUrl() {
  if(!this.foto){
    return `${base_url}/uploads/usuarios/no-image`;
  }else if(this.foto.includes('https')) {
      return this.foto;
    } else if(this.foto) {
      return `${base_url}/uploads/usuarios/${this.foto}`;
    } else {
      return `${base_url}/uploads/usuarios/no-image`;
    }
  }
}
