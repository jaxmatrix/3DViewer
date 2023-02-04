import { Injectable } from '@angular/core';


export enum labelStatus {
  warning = 'warn',
  info = 'info',
  error = 'error'
}

export interface label3d {
  name : String;
  location: [number, number];
  status : labelStatus;
}

@Injectable({
  providedIn: 'root'
})
export class LabelMapService {

  constructor() { }
}
