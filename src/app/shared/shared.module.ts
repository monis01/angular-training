import { NgModule } from "@angular/core";
import { HighlightDirective } from "./directives/highlight.directive";
import { I18nPipe } from "./pipes/i18n.pipe";

@NgModule({
    imports: [],
    declarations : [HighlightDirective, I18nPipe],
    exports : [HighlightDirective, I18nPipe]
})
export class SharedModule {

}