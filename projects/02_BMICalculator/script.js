const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height < 0 || isNaN(height)){
        result.innerHTML = `please enter a valid height`;
    }
    else if(weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter a valid weight`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

});