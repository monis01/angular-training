import { Pipe, PipeTransform, TemplateRef } from "@angular/core";

@Pipe({ name: "i18n", pure: true })
export class I18nPipe implements PipeTransform {
  
    constructor() {}

  transform(key : string): string {
    return "";
  }
}
