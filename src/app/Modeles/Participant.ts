export class participant {

    id_personne: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    description_prob: string;



  constructor (id: number, fn: string, ln: string, a: number, e: string, dp: string )
      {
        this.id_personne = id;
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
        this.email = e;
        this.description_prob = dp;

      }

  }
