import { Component, Input } from "@angular/core";

@Component({
    selector : "app-modal",
    templateUrl : "./modal.component.html",
    standalone: true,
    imports: [],
    providers :[]
})
export class ModalComponent {
    @Input() title!: string;
}