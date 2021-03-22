# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Mahlon Scott**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/~sepia-incandescent-seahorse

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [x] Fixed tones to use C major arpeggio instead of 3/4 of the C major arpeggio and 1 random B flat

## Video Walkthrough

I assume this is where I put the GIF:
<img src="https://cdn.glitch.com/e670fd58-644c-4a9d-8e63-c6e1b35a3dc0%2Ffeatures.gif"/>



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used W3 schools CSS reference in order to style some of the elements in my preferred way.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I messed up the game logic so that it played the sequence back after every guess instead of after the pattern. As I was fast at entering my guesses it resulted in the sequence playing back with weird timings instead of 
with the constant 1000 ms delay. This confused me, but I put some logging statements to see how often things were getting called and I found that playSequence was being called too often. I then reconsidered what the game 
was supposed to do and thought about the meaning of the if statements inside of my game logic function (commenting these meanings into the function) and found that playSequence was also getting called on any correct guess.
I removed this and made it so playSequence could only called when the sequence was actually over, thereby fixing the problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Something I notice is that javascript on<blank> events do not necessarily all work all the time for all elements, so I would want to know why that is, and for what elements they do work. 
Another question would be how do we make a "secure" version of this game i.e. so that the user can't just call the guess function from their console to progress the game, as well as hiding the full pattern from the user 
until they need it. (obviously overkill for this particular purpose, but potentially useful if I were to do something requiring some level of security i.e. running an online sweepstakes or something like that) I have some
ideas as to how to implement parts of this, i.e. have an api somewhere decide the pattern and only send the user the part they have gotten up to, but I am not exactly sure of the best practices for how to accomplish this.
Other than that I would like to know how to make webpages look nice and also be responsive, as it seems you can do all this manual css and stuff but you must have to spend quite a lot of time on a website to get it 
looking really good on most device shapes and sizes.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Well, I would definitely clean up the javascript mess that we made by combining certain fucntions and separating out certain functionality from other functions (e.g. combining the stop sound function and the
unlight button function, as those two do 2 parts of the same job, might as well do the entire job at once, as it is incredibly awkward to have to queue up both functions for execution separately to stop the simulated
button press). I would also probably try to make the interface look a bit nicer, like darken up the light colors so they don't look so washed out and see if I can find a good overall color scheme for the website
(i.e. figure out what color the start/stop buttons and their text should be). I would also probably try to hide the rest of the website when the game is being played, and make the game itself take up more of the screen
than it currently does. If I had waaaay too much time, I would work on what I mentioned in the previous section, maybe make an api for this game and see if I can't figure out how to make it a little more secure.



## License

    Copyright Mahlon Scott

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.