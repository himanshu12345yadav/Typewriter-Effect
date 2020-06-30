const text_1 = 'Hey there, Welcome! :)';
const text_2 = 'I am a full stack developer';
const text_3 = 'A compositor, video editor, GFX designer';
const text_4 = 'and also like to do ethical hacking with kali linux';
const text_5 = 'In simple words i am a computer enthusiast';
const text = [text_1, text_2, text_3, text_4, text_5];
const typingText = document.getElementById('typing-text');
var i = 0,
    b = 0,
    j;
const typeInHault = 400;
const typeOutHault = 3000;
const typeInSpeed = 10;
const typeOutSpeed = 20;

var displaycomplete = false;
const typein = () => {
    if (!displaycomplete && i < text[b].length) {
        typingText.innerHTML += text[b][i];
        i++;
    } else if (i === text[b].length) {
        i = 0;
        displaycomplete = true;
        j = text[b].length;
        driver();
        return undefined;
    }
    const timein = setTimeout(typein, typeInSpeed);
};

const typeout = () => {
    if (j > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, --j);
        const timeout = setTimeout(typeout, typeOutSpeed);
    } else if (j == 0) {
        displaycomplete = false;
        driver();
        if (b === 4) {
            b = 0;
        } else {
            b++;
        }
        return undefined;
    }
};
function driver() {
    if (typingText.innerHTML.length === 0) {
        setTimeout(typein, typeInSpeed);
    } else if (displaycomplete) {
        setTimeout(typeout, typeOutHault);
    }
    return undefined;
}
const id = setTimeout(driver, typeInHault);