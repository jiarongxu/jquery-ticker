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

- **beginDate** String *(default: "2008,01,02")* - start date

- **endDate** String *(default: "2008,01,22")* - end date


