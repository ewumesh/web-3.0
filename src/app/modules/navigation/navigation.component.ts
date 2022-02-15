import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector:'navbar',
    templateUrl:'./navigation.component.html',
    styleUrls: ['./navigation.css']
})

export class Navbar implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}