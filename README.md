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

- Create a webpage that accpets a value in an `INPUT` `HTML5` tag and has it show up in the `DOM`
- Know how to `bower install jquery` and `src` that `jquery.min.js`
- **Hint:** instead of just `console.log` the result, be familiar with `http://api.jquery.com/append/` & `http://api.jquery.com/appendTo/`
- **EC:** put your project into a `GitHub` repo of your own
