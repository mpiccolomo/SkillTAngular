import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

               //cod injection HttpClient
  constructor(private httpClient : HttpClient) { }

  getSaluti(nome: string) {

                                            // end point del mio servizio
    return this.httpClient.get(`http://localhost:8050//api/saluti/${nome}`); //ho parametrizzato il nome usando la tilde (` e $)  (tilde--> Alt + 0096)
     //console.log("Saluti");
  }
}
