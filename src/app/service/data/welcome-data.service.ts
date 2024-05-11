import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}
  executeHelloWorldBeanService<HelloWorldBean>() {
    return this.http.get(
      'http://localhost:8080/hello-world/path-variable/Raakesh'
    );
    //console.log('Execute Hello World Bean Service');
  }
}
