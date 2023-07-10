const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');
const emoji = [];

async function getEmoji() {
    //   alert('You clicked the button!');  // This is a pop-up alert tester
    let response = await fetch('https://emoji-api.com/emojis?access_key=3e3231cc31dd40a7a03c72bf00de047632d904b6')
    let data = await response.json();

    // console.log(data); // This is a console log tester

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
            
        });
    }
}

getEmoji();

// console.log(emoji); // This is a console log tester

btnEl.addEventListener('click', () => {
    //alert('You clicked the button!');  // This is a pop-up alert tester

    const randomNumber = Math.floor(Math.random() * emoji.length);
    // console.log(randomNumber); // This is a console log tester

    // THIS CHANGES THE EMOJI
    btnEl.innerHTML = emoji[randomNumber].emojiName;
    // THIS CHANGES THE EMOJI NAME
    emojiNameEl.innerHTML = emoji[randomNumber].emojiCode;

});