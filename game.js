// Basic guess game for learning js

const correctNumber = Math.floor(Math.random() * 10) + 1;

console.log("random sayı:" + correctNumber);

let guessCount = 3;

function theGame() {
    var num = parseInt(document.getElementById("guessInput").value);
    if (!num) {
        document.getElementById("message").innerText = "Boş bırakmayınız.";

    }
    else {
        if (guessCount == 1) {
            document.getElementById("tahmin").innerText = guessCount--;
            disableInput();
            document.getElementById("message").innerText = "Tahmin hakkınız kalmadı. Sayı: " + correctNumber + "'idi.";
            const buton = document.createElement("button");
            buton.textContent = "Yeniden Oyna";
            buton.classList.add("btn", "btn-outline-info");
            document.getElementById("alert").appendChild(buton);
            buton.addEventListener("click", function () {
                window.location.reload();
            });

        }
        else {
            if (num < 1 || num > 10) {
                document.getElementById("message").innerText = "1-10 arası bir sayi giriniz.";
            }
            else if (num < correctNumber) {
                document.getElementById("message").innerText = "Yukarı";
                guessCount--;
                document.getElementById("tahmin").innerText = guessCount;
            }
            else if (num > correctNumber) {
                document.getElementById("message").innerText = "Aşağı";
                guessCount--;
                document.getElementById("tahmin").innerText = guessCount;
            }
            else {
                document.getElementById("message").innerText = "Tebrikler doğru sayı. Yeniden oynamak için butona bas. ";
                disableInput();
                const buton = document.createElement("button");
                buton.textContent = "Yeniden Oyna";
                buton.classList.add("btn", "btn-outline-info");
                document.getElementById("alert").insertAdjacentElement("afterend", buton);
                buton.addEventListener("click", function () {
                    window.location.reload();
                });
            }
        }
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('button').disabled = true;
}

