import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator{
    validate = (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{
        const {value} = control;
        return this.http.post<any>('https://api.angular-email.com/auth/username',{
            'username' : value
        } ).pipe(
            map((data)=>{
                return null;
            }),
            catchError((err)=>{
                if(err.error.username){
                    return of({usernameInUse: true});
                }else{
                    return of({errorExists: true});
                }
            })
        );
    }
    constructor(private http: HttpClient){}
}
