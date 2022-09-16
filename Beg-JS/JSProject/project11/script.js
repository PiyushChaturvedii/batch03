const flashcards = document.getElementsBy("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];





divMaker = function divMaker(text, delThisIndex) {
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");
    var del = document.createElement('i');

    div.className = 'flashcard';

    h2_question.setAttribute("style", 'border-top:1px solid red; padding: 15px; margin-top:30px');

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute('style', 'text-align:center; display:none; color:red');
    h2_answer.innerHTML = text.my_answer;

    del.className = "fas fa-minus";
    del.addEventListener("click", function () {
        contentArray.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(contentArray));
        window.location.reload();
    })
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(del);

    div.addEventListener("click",function () {
        if (h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    })

    flashcards.appendChild(div);
}




contentArray.forEach(divMaker);

function addFlashcard() {
    var flashcard_info = {
        'my_question': question.value,
        'my_answer' : answer.value
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1], contentArray.length-1);
    question.value = "";
    answer.value = "";
}

function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}
function showCreateCardBox() {
    createBox.style.display = 'block';
}
function hideCreateBox() {
    createBox.style.display = 'none';
}

