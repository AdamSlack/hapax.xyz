import { Injectable } from '@angular/core';
import { ImageObject } from '../classes/image-object';

@Injectable({
  providedIn: 'root'
})
export class CarouselHighlightsService {

  public pageImageHighlights : {
    homePage : Array<ImageObject>
  } = {
    'homePage' : [
      new ImageObject(1,'Angular 5', 'Experts in Angular 5', 'assets/images/angularicon.svg','Angular 5'),
      new ImageObject(2,'PostgreSQL', 'Experts in PostgreSQL', 'assets/images/postgresqlicon.png','PostgreSQL'),
      new ImageObject(3,'Android', 'Experts in Android', 'assets/images/androidicon.png','Android'),
      new ImageObject(4,'Natural Language Processing', 'Experts in Natural Language Processing', 'assets/images/chatboticon.png','Natural Language Processing'),
      new ImageObject(5,'Machine Learning', 'Experts in Machine Learning', 'assets/images/machinelearningicon.png','Machine Learning')
    ]
  }
  constructor() { }
}
