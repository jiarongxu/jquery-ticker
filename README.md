This is a jquery plugin to creat a counter that update a total number daily, using css3 animation.

## Usage
jquery-ticker only needs to follow a simple pattern. Here is an example:

```js
$(".ticker-digits").ticker();
```

## Config Options

Swipe can take an optional second parameter– an object of key/value settings:

- **initDelayForEachDigit** Integer *(default:100)* - delay to start rolling

-	**delayForEachDigit** Integer *(default:300)* - delay to start rolling each digit

- **finalDelay** Integer *(default: 3000)* - after all digits starts rolling then wait for few seconds to stop rolling and show the number

- **dataDaily** Integer *(default: 3182)* - Daily increased number

- **beginDate** String *(default: "2008,01,02")* - start date

- **endDate** String *(default: "2008,01,22")* - end date

##CSS

SCSS is used for the plugin, I am using livereload to compile my SCSS code. SCSS code is in /style/src/ticker.scss and the compile code is in /style/style.css

The animation is using the css3 animation to start rolling the background image and then it's done, I positioned the background image to the right digit.