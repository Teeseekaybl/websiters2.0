//FeedBackFormJavaScriptCode
let btnResetAll = document.querySelector('button');
let inputs = document.querySelectorAll('input');
btnResetAll.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
})
