import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { Navbar } from "./navigation.component";

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        ButtonModule
    ],

    declarations: [
        Navbar
    ],

    exports: [
        Navbar
    ]
})

export class NavigationModule {}