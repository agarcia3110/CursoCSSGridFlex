import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AdminFlexAngular';
    claseFecha: string = 'fas fa-arrow-left';
    sidebarDesplegado: boolean = true;

    desplegarOcultarSidebar() {
        this.sidebarDesplegado = !this.sidebarDesplegado;
    }
}
