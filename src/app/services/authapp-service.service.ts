import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (UserId : string, Password : string): boolean => {

    if (UserId === 'Tommy' && Password === 'ciao')
    {
        sessionStorage.setItem("Utente", UserId);
        return true;
    }
    else
    {
        return false;
    }
  }

  loggedUser = () => {

      let utente = sessionStorage.getItem("Utente");

      return (sessionStorage.getItem("Utente") != null) ? utente : "";
  }

  isLogged = () => (sessionStorage.getItem("Utente") != null) ? true : false;


  clearAll = () => sessionStorage.removeItem("Utente");



}
