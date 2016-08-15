_day one_
# Module 2 MacBook Setup

1. [brew homepage](http://brew.sh/)
2. 
 [setup brew](https://coolestguidesontheplanet.com/installing-homebrew-on-os-x-el-capitan-10-11-package-manager-for-unix-apps/) 

 * `xcode-select --install`

 * `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

 * `brew doctor`

 * `brew list`

2. [cask homepage](https://caskroom.github.io) _or ez way copy  
 * paste in Terminal: `brew tap caskroom/cask`

3. Install Sublime

 * `brew cask install sublime-text`

4. Install Node

 * `brew install node`
 * `node -v`

5. Install NPM

 * `sudo npm install npm -g`
 * `npm -v`
 
6. Install Bower bower homepage [click to read about](https://bower.io/)

 * `npm install -g bower`

7. create a `HTML` page

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
  
  </body>
</html>
```

# How to Wire Up A Basic Web App

```
.
├── css
│   └── style.css
├── index.html
└── js
    └── app.js
```
# Common Keystrokes

[click here for my OSX Keystroke Guide Repo](https://github.com/zackn9ne/OSX-Commands-Cheat-Sheet)

---

_day two_


# Homework

- Use the code in `/first_general_ex` as a starting point (or the version you are following along with) and build on that code
- Create a webpage that accpets a value in an `INPUT` `HTML5` tag and has it show up in the `DOM`
- Know how to `bower install jquery` and `src` that `jquery.min.js`
- **Hint:** There is lots of code in there already you just have to make it work.
- **Hint:** instead of just `console.log` the result, be familiar with `http://api.jquery.com/append/` & `http://api.jquery.com/appendTo/`
- **EC:** put your project into a `GitHub` repo of your own
- **_R U SRS?_** 
- <img src="http://orig04.deviantart.net/1ac6/f/2012/226/3/c/crogunk___r_u_srs___vector_by_rocan64-d5b1f49.png" width="200">
- Ok, this can be tricky so if you're stuck go ahead and just use an `jQuery` `.appendTo()` to _append_ to whatever you `DOM ELEMENT` like in your `HTML` file 
- **Good Video About jQuery and Chaining** `https://www.youtube.com/watch?v=hMxGhHNOkCU`

---

_day three_

# CSS Color Names
- 147 Colors Website `http://www.colors.commutercreative.com/` you _may_ want to bookmark this 
- page 250 in book
- `pixlr.com`
- <kbd>⌘</kbd>+<kbd>space</kbd>+<kbd>Digital Color Meter</kbd> Digital Color Meter **OSX ONLY**
- CSS Galleries for _inspiration_ `http://www.cssmania.com/`
- Adobe Kuler for color themes `http://www.cssmania.com/`

# HTML Layout Refresher
- <kbd>⌘</kbd>+<kbd>shift</kbd>+<kbd>H</kbd> Go To Home
- `http://stackoverflow.com/questions/134727/whats-the-key-difference-between-html-4-and-html-5`
- Chapter 13 Box Model
- Block Elements versus Inline Elements `https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements`

# Homework Overview
- Malik used these methods
- `.fadeIn()` `http://api.jquery.com/fadein/`
- `.append()`
- `.click` `https://api.jquery.com/click/`

# New Homework
- page 304
- use colors from what you learned today _look up if you forgot I took notes for you guys_
- use this `screen mockup` as help 
- <img src="https://raw.githubusercontent.com/zackn9ne/module2_set1/master/bin/Screen%20Shot%202016-08-10%20at%201.png">
- don't worry about bootstrap yet (it dosen't really apply for this exercise)

---

_day four_

#video html5

- `https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats`


```
<video preload="auto" controls loop >
	<source 
	poster="http://www.gohobby.com/wp-content/uploads/2013/07/Ferrari-Testarossa.jpg" width="400" height="300" 
	
	src="http://techslides.com/demos/sample-videos/small.ogv" 
	/>
</video>
```

#homework day four

- use what you learned to day to make yourself a mixtape
- use a cool "tape" graphic and `center it` above the top of your webpage
- use a colorful `h1` with a cool font in order to name your mixtape below the tape graphic
- `embed` five youtube videos in the mixtape section
- add a `Sound FX` Section **below** that and be able to play 2 sounds for fun in order to play pranks on people while talking on the phone
- add a `final video` that you embed usign `HTML5 video` tags, and **be sure to add a preload**



---

_day five_

#make a new GitHub Repo and initilize it with a readme.MD

- `http://dillinger.io/`

#show path in BASH Prompt
`touch ~/.bash_profile`

```
PS1='\[`[ $? = 0 ] && X=2 || X=1; tput setaf $X`\]\h\[`tput sgr0`\]:$PWD\n\$ '
```

#displaying with images and center alining them
```
<figure style="text-align: center;">
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
<figcaption style="margin: auto; max-width: 304px; text-align: left;">cliffs are mad crazy</figcaption>
</figure>
```

#video on how to use Sublime

- `https://www.youtube.com/watch?v=SVkR1ZkNusI&feature=youtu.be&list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK`

#weekend homework

#javascript refocus points _basic_
_google these_ Define them in a new 'Sublime Text' document called JavaScript_notes.txt. **Copy paste the URL from the web page in which you found the answer**

1. Write me a paragraph on what a function is/does. What problems do they solve.
2. Write me what a variable is, a paragraph. And what it's used for.
3. Write me what an array is and what it's used for.

- _Include a bibliography_ (formatting does not matter, just a list of the URL's you found that helped you make your answers)

#javascript refocus points _advanced_

_google these_ Define them in a new 'Sublime Text' document called JavaScript_notes.txt. **Copy paste the URL from the web page in which you found the answer**

1. JavaScript Data Types
2. Objects
3. JQuery get/set add/remove 

Submit this document to me like it's a book report and go over each thing. Don't forget your **URL** sources. 

---

_day six_

`optional Literature`

https://www.amazon.com/CSS3-Missing-David-Sawyer-McFarland/dp/1449325947

# CSS Text Shadow

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- https://developer.mozilla.org/en-US/docs/Web/CSS/transition

# Easing examples

- https://css-tricks.com/clever-uses-step-easing/
- https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
