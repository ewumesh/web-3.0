import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector:'footer',
    // templateUrl:'./footer.component.html',
    styleUrls: ['./footer.css']
})

export class Footer implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}