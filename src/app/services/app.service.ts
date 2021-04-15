import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


@Injectable({providedIn: "root"})
export class AppService{
    constructor(private http: HttpClient, private router:Router) { }
}