import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HTTPInterceptor } from "./interceptor/http.interceptor";

@NgModule({
    imports:[HttpClientModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HTTPInterceptor,
            multi: true,
          }
    ]
})
export class CoreModule {
    
}