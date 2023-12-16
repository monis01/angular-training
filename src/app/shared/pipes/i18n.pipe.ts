import { Pipe, PipeTransform, TemplateRef } from "@angular/core";

const i18nMapper: any = {
  "arthur.oxford" : "ARTHUR EST UN AUTEUR PRINCIPAL DE LA MAISON D'ÉDITION OXFORD"
}
@Pipe({ name: "i18n", pure: true })
export class I18nPipe implements PipeTransform {
  
    constructor() {}

  transform(key : string, value1: string, value2?: any): string {

    const mapperKey = key.toLowerCase()+"."+value1.toLowerCase();
    return i18nMapper[mapperKey];
  }
}
