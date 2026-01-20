# Project Related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-tjapiqyj?file=1-colorChanger%2Fmain.js)

# Solution code

## Project 1

```javascript
// console.log("Hello, I am Kunal")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Soluion

```javascript

const form = document.querySelector('form');

//this usecase will give you empty
// const heigth = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }

  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   //show the result
   results.innerHTML = `<span>${bmi}</span>`
  }
});
```
