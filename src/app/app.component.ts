import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  length = 0;
  includedLetters = false;
  includedNumbers = false;
  includedSymbols = false;
  password = "";

  //Check for numbers only on user's input
  changeLength(userInput: string){

    const parsedValue = parseInt(userInput);

    if(!isNaN(parsedValue)){

      this.length = parsedValue;
    }
  }

  //########## CHECKBOXES ##########
  // Whenever a checkbox is selected, change its value.
  lettersClicked(){

    this.includedLetters = !this.includedLetters;
  }

  numbersClicked(){

    this.includedNumbers = !this.includedNumbers;
  }

  symbolsClicked(){

    this.includedSymbols = !this.includedSymbols;
  }


  //When button is clicked = store all characters of the chosen clickboxes
  //Then, randomly choose between them accordingly to the user's length
  buttonClicked(){

    const letters= "abcdefghijklmnopqrstuvxwyz";
    const numbers= "1234567890";
    const symbols= "!@#$%&*()";

    let chosenChars = "";

    if (this.includedLetters){

      chosenChars += letters;
    }
    if (this.includedNumbers){

      chosenChars += numbers;
    }
    if (this.includedSymbols){

      chosenChars += symbols;
    }

    let generatedPass = "";

    for (let i = 0; i<this.length ; i++){

      const index = Math.floor(Math.random() * chosenChars.length);
      generatedPass += chosenChars[index];
    }

    this.password = generatedPass;
  }

}
