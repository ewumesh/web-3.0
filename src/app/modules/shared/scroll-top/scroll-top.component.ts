import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.css']
  })
export class ScrollTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor(
        private primengConfig: PrimeNGConfig,
        @Inject(DOCUMENT) private document: Document,
        ) {}
    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }
}