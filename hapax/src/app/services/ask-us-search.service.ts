import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskUsSearchService {

  public exampleQueries : Array<string> = [
    'What are my options when it comes to ad revenue?',
    'How would i go about building a CRM Chatbot?',
    'What frameworks can i use to build a website?',
    'How can i leverage A.I. accross my business?',
    'How can i better understand the needs of my customers?',
    'How can i run analytics across a natural language dataset',
    'What is Natural Language Processing?',
    'How can i leverage Natural Language Processing across my business?',
    'Is there a more adaptable way of managing projects?',
    'How can i integrate analytics frameworks into my project?',
    'What are my options when it comes to analytics?'
  ]

  constructor() { }

  public getRandomQuery() : string {
    return this.exampleQueries[Math.floor(Math.random()*this.exampleQueries.length)]
  }

}
