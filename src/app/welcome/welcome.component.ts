import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { response } from 'express';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'], // Use styleUrls instead of styleUrl
})
export class WelcomeComponent {
  message = 'some welcome message';
  name = '';
  welcomeMessageFromService = '';
  // Activated Route - injecting dependency
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {
    console.log(this.message); // Moved console.log statement inside the constructor
    this.name = this.route.snapshot.params['name']; // Moved inside the constructor
  }
  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    //console.log('Last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    // console.log(error);
    // console.log(error.message);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
