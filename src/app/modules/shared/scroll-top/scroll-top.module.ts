import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ScrollTopComponent } from './scroll-top.component';

@NgModule({
    declarations: [ScrollTopComponent],
    imports: [ 
        CommonModule,
        ButtonModule
     ],
    exports: [ScrollTopComponent],
    providers: [],
})
export class ScrollTopModule {}