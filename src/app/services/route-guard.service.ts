import { AuthappService } from './authapp-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

/*questo servizio serve a controllare il route della navigazione del sito in base alle autenticazioni
implementare l'interfaccia canActivate che riguarda Angular router!!! */
export class RouteGuardService implements CanActivate {

/* verifica se l'utente è loggato verifica per accedere a determinate rotte (pagine) vado ad implementera
il servizio in app-routing.module nel path welcome e per tutti i path che voglio proteggere/controllare
 inserisco li il controllo --->
 canActivate : [RouteGuardService]} <-- in questo modo  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.BasicAuth.isLogged())
    {
     this.route.navigate(['login']);
          return false ;
    }
    else
    {
    return true ;
    }
  }

/*ignetto il service   constructor( private BasicAuth : AuthappService, private route : Router) { }
 in questo service */
  constructor( private BasicAuth : AuthappService, private route : Router) { }


}
