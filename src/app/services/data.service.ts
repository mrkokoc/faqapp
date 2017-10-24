import {Injectable} from '@angular/core';
import {Question} from "../models/Question";

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    /*this.questions = [
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
    ];*/
  }

  // Get questions from LocalStorage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  };

  // Add question to LocalStorage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  };

  // Remove question from LocalStorage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  };
}
