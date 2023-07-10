const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

function clickBtn() {
//   alert('You clicked the button!');  // This is a pop-up alert tester
}

btnEl.addEventListener('click', () => {
    alert('You clicked the button!');  // This is a pop-up alert tester
    clickBtn();
});