import { coach } from "./Coach";

export class seance {

  constructor (
    public id: number,
    public  libelle: string,
    public duree: number,
    public typeseance: number,
    public seanceducoach_id_personne: coach ) {}

  }
