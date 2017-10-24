import { Injectable } from '@angular/core';
import { Question } from "../models/Question";

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'How to write code?',
        answer: 'Use some magic.',
        hide: true
      },
      {
        text: 'How to stop being sad?',
        answer: 'Be awesome instead!',
        hide: true
      },
      {
        text: 'What is your cats name?',
        answer: 'He is Zyxel.',
        hide: true
      }
    ];
  }

  getQuestions () {
    return this.questions;
  }
}
