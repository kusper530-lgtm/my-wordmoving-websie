var movingWord = document.getElementById('movingInput');
var phrase = document.getElementById("phrase");
var confirmButton = document.getElementById('ConfirmButton');
var increaseButton = document.getElementById('increaseButton');
var decreaseButton = document.getElementById('decreaseButton');
var result = document.getElementById('result');

var ExchangeBtn = document.getElementsByClassName('ExchangeBtn')[0];

// 元のmovingInputにclassを追加
movingWord.classList.add('movingInput');


confirmButton.addEventListener('click', function () {
    RemovingAllWords();
});


increaseButton.addEventListener('click', function () {
    // 現在存在しているmovingInputを取得
    var movingWords = document.querySelectorAll('.movingInput');

    // 最後のmovingInputをクローン
    var lastMovingWord = movingWords[movingWords.length - 1];
    var clonedElement = lastMovingWord.cloneNode(true);

    // クローンを空にする
    clonedElement.value = "";

    // クローンにもclassを付ける
    clonedElement.classList.add('movingInput');

    // 最後の要素の後ろにクローンを追加
    lastMovingWord.parentNode.insertBefore(
        clonedElement,
        lastMovingWord.nextSibling
    );

    // 結果を更新
    RemovingAllWords();
});


decreaseButton.addEventListener('click', function () {
    // 現在存在しているmovingInputを取得
    var movingWords = document.querySelectorAll('.movingInput');

    // 2個以上ある場合、最後の要素を削除
    if (movingWords.length > 1) {
        movingWords[movingWords.length - 1].remove();
    }

    // 結果を更新
    RemovingAllWords();
});


function RemovingAllWords() {
    var phraseValue = phrase.value;

    // class="movingInput"を持つ要素を全て取得
    var movingWords = document.querySelectorAll('.movingInput');

    var replacing = phraseValue;

    movingWords.forEach(function (word) {
        var inputValue = word.value;

        // 入力されている場合だけ削除
        if (inputValue !== "") {
            replacing = replacing.replace(
                new RegExp(inputValue, 'g'),
                ""
            );
        }
    });

    result.textContent = replacing;
}



ExchangeBtn.addEventListener('click', function () {
   // window.open('https://jp-seemore.com/web/4885/#google_vignette', '_blank');
});