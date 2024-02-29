const formData = document.querySelector('form');
formData.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('bmiheight').value);
    const weight = parseInt(document.getElementById('bmiweight').value);
    if(height === '' || height < 0 ||isNaN(height)){
        document.getElementById('bmi').innerText = 'Please give a valid height';
    } else if(weight === '' || weight < 0 ||isNaN(weight)){
        document.getElementById('bmi').innerText = 'Please give a valid weight';
    } else {
        document.getElementById('bmiweight').innerText = weight;
        document.getElementById('bmiheight').innerText = height;
        document.getElementById('bmi').innerText = (weight/ ((height*height)/10000)).toFixed(2);
    }
})