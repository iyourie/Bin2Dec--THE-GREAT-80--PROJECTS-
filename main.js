//variables
let firstInp = document.querySelectorAll('input')[0];
let binRad = document.querySelectorAll('input')[1];
let decRad = document.querySelectorAll('input')[2];
let binBtn = document.querySelectorAll('button')[0];
let decBtn = document.querySelectorAll('button')[1];
let resultInp = document.querySelectorAll('input')[3];
let allRad = document.querySelectorAll('input[type="radio"]')

//if user click binary radio : disable convert to binary button
binRad.onclick = () => {
    //clear the inputs
    firstInp.value = ''
    resultInp.removeAttribute('value')
    //remove the class not-allowed from the convert to decimal button
    decBtn.classList.remove('not-allowed')
    //remove the disabled attribute from the convert to decimal button
    decBtn.removeAttribute('disabled', 'disabled')
    //add the class not-allowed to the button convert to binary
    binBtn.classList.add('not-allowed')
    //add the disabled attribute to the button convert to binary
    binBtn.disabled = "disabled";
    //user can only enter 8 digits + user can only enter 1s and 0s + (main function)
    decBtn.onclick = () => {
        //check if user enter 8 digits
        if (firstInp.value.length <= 8) {
            //convert user input into array
            let arr = firstInp.value.split('')
            //check if the arry contains  1s and 0s only
            if (arr.every(c => c == 0 || c == 1) == true) {
                //convert the array elements from strings to numbers
                let map = arr.map(x => {
                    return Number(x)
                })
                //the array that will conain the values of a, b, c, d, e, f, g, h
                let answers = [];
                //use destructuring to convert bin to decimal (main function)
                let a, b, c, d, e, f, g, h;
                [a, b, c, d, e, f, g, h] = map
                a = a + 2 * 0
                //push the numbers to the array answers
                b == undefined ? answers.push(a) : b = b + 2 * a
                c == undefined ? answers.push(b) : c = c + 2 * b
                d == undefined ? answers.push(c) : d = d + 2 * c
                e == undefined ? answers.push(d) : e = e + 2 * d
                f == undefined ? answers.push(e) : f = f + 2 * e
                g == undefined ? answers.push(f) : g = g + 2 * f
                h == undefined ? answers.push(g) : h = h + 2 * g
                answers.push(h)
                //use the higher order function filter to choose only numbers
                let filter = answers.filter(x => {
                    return typeof x === 'number'
                })
                //put the final answer to the result input
                resultInp.setAttribute('value', filter)
                //alert the user to enter only 1s and 0s
            } else {
                alert('you can only enter 1s and 0s')
            }
            //alert the user to enter only up to 8 digits
        } else if (firstInp.value.length > 8) {
            alert('you can only enter up to 8 digits')
        }
    }
}

//if user click decimal radio : disable convert to decimal button
decRad.onclick = () => {
    //add the class not-allowed to the convert to decimal button
    decBtn.classList.add('not-allowed')
    //add the disabled attribute to the convert to decimal button
    decBtn.disabled = "disabled";
    //remove the class not-allowed from the button convert to binary
    binBtn.classList.remove('not-allowed')
    //remove the disabled attribute from the button convert to binary
    binBtn.removeAttribute('disabled', 'disabled')
    //clear the inputs
    firstInp.value = ''
    resultInp.removeAttribute('value')
    //convert decimal number to binary number (main function)
    binBtn.onclick = () => {
        let de = Number(firstInp.value);
        resultInp.setAttribute('value', de.toString(2))
    }
}

//alert the user if he didn't check any radio input
firstInp.onclick = ()=>{
    if(binRad.checked == false && decRad.checked == false){
        alert('please check binary or decimal first')
    } 
}