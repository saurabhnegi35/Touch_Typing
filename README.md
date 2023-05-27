# Getting Started with Touch Typing

This project was created using React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# About this App

Touch Typing is a typing game where users are presented with a displayed word and their task is to type it correctly. The app provides real-time feedback on the accuracy of the user's input and plays audio cues for correct and incorrect keystrokes.

## Here's how the app works:

- User Interface: The app has a simple user interface that consists of an input field where users can type the displayed word. The input field is disabled once the user successfully completes typing the word.

- Word Display: The app receives the displayWord as a prop, which represents the word that needs to be typed. The displayWord is compared with the user's input to determine correctness.

- Feedback Sounds: The app uses audio files (click.wav, error.wav, and yay.wav) to provide audio feedback to the user. The click sound is played when a correct keystroke is entered, the error sound is played for incorrect keystrokes, and the yay sound is played when the user successfully completes typing the word.

- Validation and Feedback: As the user types, the app compares the input with the displayWord. If the input matches the corresponding portion of the displayWord, it is considered correct and the click sound is played. If there is a mismatch, indicating an error, the error sound is played. The input field's background color changes to indicate correctness or errors. Once the user successfully types the entire word, the yay sound is played, the input field is cleared, and the app waits for the next word.

- Accuracy Calculation: The app also calculates and displays the accuracy of the user's typing. The errorCount state variable keeps track of the number of errors made, and the keyPressCount state variable counts the total number of key presses (including both correct and incorrect). The accuracy is calculated as (1 - errorCount / keyPressCount) \* 100 and is updated whenever there is a change in the errorCount or keyPressCount.

## How to use this App: 

- Access the typing game:
    Open a web browser on your device (e.g., Chrome, Firefox, Safari).
    Enter the URL provided or navigate to the website where the typing game is hosted.

- Start the game:
    Once you are ready to start, you may be prompted to click a button or press a key to begin the game.

- Type the displayed word:
    As the game starts, a word will be displayed on the screen. Your goal is to type the word accurately and quickly.
    Use your keyboard to type the letters of the word in the correct order. Pay attention to capitalization if it's specified.

- Feedback and scoring:
    As you type, the input field may provide visual feedback, such as changing the background color to indicate correctness. A correct letter press will typically be indicated by a positiveresponse (e.g., sound effect), while an incorrect press may trigger a negative response (e.g., sound effect, color change).
    Your score and accuracy may be tracked during the game. Accuracy is usually calculated based on the number of errors you make in relation to the total number of key presses. Aim to typeas accurately as possible to achieve a higher accuracy score.

- Complete the word:
    Continue typing the word until you have entered all the correct letters. Once the entire word is typed correctly, you may receive positive feedback (e.g., sound effect ) indicating asuccessful completion.

- Enjoy and practice:
    The typing game provides an engaging and interactive way to practice and enhance your typing skills.
    Make the most of the game by challenging yourself, aiming for accuracy and speed, and enjoying the process of improving your typing abilities.
