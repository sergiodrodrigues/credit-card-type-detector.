# Credit Card Type Detector
A JavaScript function to detect the type of a credit card based on its number.

## Introduction
This repository contains a JavaScript function `detectCreditCardType` that takes a credit card number as input and returns the type of the card (e.g., Visa, MasterCard, American Express, etc.).

## Features
* Detects credit card type based on the card number
* Supports various credit card types, including:
    + Visa
    + MasterCard
    + American Express
    + Diners Club
    + Discover
    + JCB
    + Voyager
    + HiperCard
    + Aura
    + enRoute
* Handles card numbers with varying lengths (13, 15, or 16 digits)

## Usage
To utilize the detectCreditCardType function, follow these steps:

+ Open a web browser and navigate to the browser's console (e.g., Chrome DevTools, Firefox Developer Edition).
+ Copy and paste the detectCreditCardType function into the console.
+ Invoke the function by calling it with a valid credit card number as an argument, like so:
+ const cardType = detectCreditCardType('5105105105105100');
+ console.log(cardType); // Output: MasterCard

Alternatively, you can also use it as follows:
+ console.log(detectCreditCardType('5105105105105100')); // Output: MasterCard
+ console.log(detectCreditCardType('371449635398431')); // Output: American Express
  
Note that the function expects a string representing the credit card number, which may or may not contain non-digit characters (e.g., spaces, hyphens). The function will automatically remove any non-digit characters from the input string before performing the type detection.

By following these steps, you can easily test and utilize the detectCreditCardType function in a browser environment.

## Installation
To use this function in your own project, you can copy and paste the code into your JavaScript file or install it using npm.

## Contributing
If you'd like to contribute to this repository, please fork it and submit a pull request with your changes. Make sure to include tests for any new features or bug fixes.

## Testing
To test the detectCreditCardType function with different credit card numbers, you can test the `detectCreditCardType` function using [4Dev's Credit Card Number Generator](https://www.4devs.com.br/gerador_de_numero_cartao_credito). This tool allows you to generate valid credit card numbers for various card types, making it easy to test the function's accuracy.
