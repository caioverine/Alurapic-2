import {Component, Input} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'foto',
    templateUrl: './app/foto/foto.component.html'
})
export class FotoComponent {

    @Input() titulo;
    @Input() url;
    descricao: string;
}