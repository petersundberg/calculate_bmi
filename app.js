// local comments data

const comments = [
  {
    bmiComment: "Enter length and weight ...",
    under: "Underweight - maybe you should try to gain some weight ...",
    normal: "Normalweight - your weight is 'correct' according to your length!",
    over: "Overweight - you better watch your weight ...",
    obes: "Obesity - you'd better loose som weight ...",
    graveObes: "Grave obesity - you must loose weight for your health's sake!"

  }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const length = document.querySelector('.length');
const weight = document.querySelector('.weight');
const bmiResult = document.querySelector('.bmi');
const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');
const commentElem = document.querySelector('.comment');


calculateBtn.addEventListener('click', function(){
  if(length.value > 0 && weight.value > 0){
    let result = (weight.value / (length.value /100 * length.value /100)).toFixed(1);
    bmiResult.innerHTML = result;
    setComment(result);
  }
  else{
    bmiResult.innerHTML = "Enter both values to calculate ...";
  }
});

//length onChange, update bmi
length.addEventListener('change', function(){
  if(length.value > 0 && weight.value > 0){
    let result = (weight.value / (length.value /100 * length.value /100)).toFixed(1);
    bmiResult.innerHTML = result;
    setComment(result);
  }
  else{
    // bmiResult.innerHTML = "Enter both values to calculate ...";
    commentElem.innerHTML = "Enter both values to calculate ...";
  }
});

//weight onChange, update bmi
weight.addEventListener('change', function(){
  if(length.value > 0 && weight.value > 0){
    let result = (weight.value / (length.value /100 * length.value /100)).toFixed(1);
    bmiResult.innerHTML = result;
    setComment(result);
  }
  else{
    // bmiResult.innerHTML = "Enter both values to calculate ...";
    commentElem.innerHTML = "Enter both values to calculate ...";
  }
});


function setComment(result){
  let comment = "";

  if(result === 0){
    comment = comments[0].bmiComment;
  }
  else if(result > 0 && result <= 18.5){
    comment = comments[0].under;
  }
  else if(result >= 18.5 && result <= 24.9){
    comment = comments[0].normal;
  }
  else if(result >= 25.0 && result <= 29.9){
    comment = comments[0].over;
  }
  else if(result >= 30.0 && result <= 39.9){
    comment = comments[0].obes;
  }
  else{
    comment = comments[0].graveObes;
  }
  commentElem.innerHTML = comment;
}



resetBtn.addEventListener('click', function(){
  length.value = "";
  weight.value = "";
  bmiResult.innerHTML = 0;
  commentElem.innerHTML = comments[0].bmiComment;
});
