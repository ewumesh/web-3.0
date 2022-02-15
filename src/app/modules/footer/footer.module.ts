import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { Footer } from "./footer.component";

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        ButtonModule
    ],

    declarations: [
        Footer
    ],

    exports: [
        Footer
    ]
})

export class FooterModule {}