import { NgModule } from "@angular/core";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
    imports: [],
    declarations : [HighlightDirective],
    exports : [HighlightDirective]
})
export class SharedModule {

}