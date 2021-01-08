import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

}
