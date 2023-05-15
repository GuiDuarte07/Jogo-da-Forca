const keyboardKeys = [
  {
    key: "Q",
    pressed: false,
    hasWord: false,
  },
  {
    key: "W",
    pressed: false,
    hasWord: false,
  },
  {
    key: "E",
    pressed: false,
    hasWord: false,
  },
  {
    key: "R",
    pressed: false,
    hasWord: false,
  },
  {
    key: "T",
    pressed: false,
    hasWord: false,
  },
  {
    key: "Y",
    pressed: false,
    hasWord: false,
  },
  {
    key: "U",
    pressed: false,
    hasWord: false,
  },
  {
    key: "I",
    pressed: false,
    hasWord: false,
  },
  {
    key: "O",
    pressed: false,
    hasWord: false,
  },
  {
    key: "P",
    pressed: false,
    hasWord: false,
  },
  //PASSA DE LINHA
  {
    key: "A",
    pressed: false,
    hasWord: false,
  },
  {
    key: "S",
    pressed: false,
    hasWord: false,
  },
  {
    key: "D",
    pressed: false,
    hasWord: false,
  },
  {
    key: "F",
    pressed: false,
    hasWord: false,
  },
  {
    key: "G",
    pressed: false,
    hasWord: false,
  },
  {
    key: "H",
    pressed: false,
    hasWord: false,
  },
  {
    key: "J",
    pressed: false,
    hasWord: false,
  },
  {
    key: "K",
    pressed: false,
    hasWord: false,
  },
  {
    key: "L",
    pressed: false,
    hasWord: false,
  },
  {
    key: "Ç",
    pressed: false,
    hasWord: false,
  },
  {
    key: "Z",
    pressed: false,
    hasWord: false,
  },
  {
    key: "X",
    pressed: false,
    hasWord: false,
  },
  {
    key: "C",
    pressed: false,
    hasWord: false,
  },
  {
    key: "V",
    pressed: false,
    hasWord: false,
  },
  {
    key: "B",
    pressed: false,
    hasWord: false,
  },
  {
    key: "N",
    pressed: false,
    hasWord: false,
  },
  {
    key: "M",
    pressed: false,
    hasWord: false,
  },
]

const gameOver_svg = `<svg stroke-linecap="round" style="height: 200px;" viewBox="0 0 400 400">
<g fill="none" stroke="#b7b7b7" stroke-width="10">
  <path d="M296.7 144.6v112"></path>
  <path d="M295.5 179.7c-12 0-18.8 10.8-25 21-4.3 6.7-11 24.6-15 35.6"></path>
  <path d="M296.3 179.6c13.7 0 20 16 24.6 24 2.2 4 4.8 19 6 32.7"></path>
  <path d="M295.5 256.5c-5.2 9.4-9.7 20.4-15 30-2.5 4.6-5.8 19.7-7.8 22.8-3.2 5-4 7.5-7.6 7.5">
  </path>
  <path id="right-leg2" d="M297.6 256.5c5.8 10.4 12 27.7 14 30.7 3.8 5.6 7.2 22.4 9.8 25 1.4 1.5 1.6 3 5.7 4.6">
  </path>
</g>
<g id="gallows">
  <path
    d="M297 71v46.7M290.5 101.2L297 99l6.7-2.2M290.5 108.6l6.6-2.2 6.7-2.2M290.5 116l6.6-2.3 6.7-2.2M284.5 155.3c-7-7-7-18 0-25l12.6-12.6 12.6 12.5c7 7 7 18.2 0 25-3.4 3.6-8 5.3-12.5 5.3s-9-1.7-12.5-5.2z"
    fill="none" stroke="#f7b239" stroke-width="5.8"></path>
  <path d="M217.2 73.2L197.5 93l-76.8 76.7v-42L155.5 93 175.2 73h42z" fill="#b27214"></path>
  <path d="M39 27h35.5v46.2H39z" fill="#b27214"></path>
  <path d="M55.6 27h19v46.2h-19z" fill="#995c0d"></path>
  <path d="M338 27v46.2H120.6V27H338z" fill="#b27214"></path>
  <path d="M217.2 73.2L197.5 93h-42L175.2 73h42z" fill="#995c0d"></path>
  <path d="M120.7 169.7v223H74.5V7.3h46.2v162.3z" fill="#b27214"></path>
  <path d="M388 388c0-3-2.8-5.8-6-5.8H18c-3.2 0-6 2.7-6 6 0 3 2.8 5.8 6 5.8h364c3.2 0 6-2.7 6-6z" fill="#8b5e24">
  </path>
</g>
<g id="Layer1">
  <circle cx="297.1" cy="139.4" fill="#b7b7b7" r="28.5"></circle>
  <g id="eyes" fill="none" stroke="#000" stroke-width="2">
    <path d="M291.6 130c-4.2 4.2-4 4.3-8.4 8.4M283.2 130c4.4 4.3 4.4 4.2 8.4 8.4"></path>
    <path d="M311 130c-4 4.2-4 4.3-8.2 8.4M302.8 130c4.4 4.3 4.3 4.2 8.3 8.4"></path>
  </g>
</g>
</svg>`;

//Contante com letras e suas equivalentes com acento
const handleLetterAccent = Object.freeze({
  "A": /[áàâãÁÀÂÃ]/g,
  "E": /[éèêÉÈ]/g,
  "I": /[íïÍÏ]/g,
  "O": /[óôõöÓÔÕÖ]/g,
  "U": /[úÚ]/g
});

let gameWord = '';
let revealedGameWord = '';
let qntErros = 0;
let gameOver = false;

//Verifica se a palavra é uma palavra válida
function wordIsvalid(word) {
  if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\- ]+$/.test(gameWord)) return false;

  if (word.length < 2) return false;
  
  return true;
}

async function startGame() {
  qntErros = 0;
  gameOver = false;
  revealedGameWord = '';
  gameWord = '';
  
  const randomSecretWord = confirm('Você deseja que uma palavra seja sorteada? (caso selecione "cancelar" você irá escrever a palavra que deseja jogar');
  if (randomSecretWord) {
    //fazendo um fetch para buscar o arquivo de palavras e depois convertendo para json na mesma linha
    let wordArray = await (await fetch("palavras.json")).json();
    gameWord = wordArray[Math.round(Math.random() * wordArray.length)].toUpperCase().trim();
  } else {
    do {
      try {
        gameWord = prompt("Digite a palavra (só pode conter letras e espaço)").toUpperCase().trim();
      } catch(e) {
        document.location.reload(true);
        return;
      }

    wordIsvalid(gameWord)
    } while (!wordIsvalid(gameWord))
  }

  
  
  createUserKeyboard();
}



function gameWin(innerHTML) {
  if (gameOver) return;
  
  const keyboard_el = document.querySelector(".keyboard");
  keyboard_el.innerHTML = innerHTML;
  document.querySelectorAll(".btn").forEach((button_el) => {
    button_el.classList.add("disabled")
  })
  gameOver = true;
  setTimeout(() => alert("Você acertou! 😁"), 10)
}

function createUserKeyboard() {
  const keyboard_el = document.querySelector(".keyboard");
  if (keyboard_el) delete keyboard_el;
  const word_el = document.querySelector(".word");
  keyboard_el.innerHTML = '';
  const div1_el = document.createElement("div");
  const div2_el = document.createElement("div");
  const div3_el = document.createElement("div");

  keyboardKeys.forEach((keyProps,idx) => {
    // Para cada tecla, é criado um botão com classe de ativo e a função no onclick para remover a classe
    const keyButton_el = document.createElement("button");
    keyButton_el.classList.add("btn", "btn-secondary");
    keyButton_el.textContent = keyProps.key;
    keyButton_el.onclick = (e) => {
      e.target.classList.remove("btn-secondary");
      /* const keyValue = keyButton_el.textContent; */

      keyProps.pressed = true;
      //Verifica se a tecla pressoada existe na palavra
      if (gameWord.includes(keyProps.key)) {




        //acertou a letra
        keyProps.hasWord = true;
        //desabilita o botão e pinta de verde
        keyButton_el.classList.add("btn-success", "disabled");

        //revela todas a letra na palavra
        revealedGameWord = revealedWordEx(gameWord);
        word_el.textContent = revealedGameWord;

        //Se a parte revelada da palavra não possuir _ significa que todas as letras foram encontradas antes dele perder o jogo
        if (!revealedGameWord.includes("_")) {
          gameWin(keyboard_el.innerHTML)
        }





      } else if(/[ÁÀÂÃÉÈÍÏÓÔÕÖÚ]/g.test(gameWord)) {
          if (/[AEIOU]/g.test(keyProps.key)) {
          const correspondingAccentLetters = gameWord.match(handleLetterAccent[keyProps.key]);

          if (correspondingAccentLetters) {





            //acertou a letra
            keyProps.hasWord = true;
            //desabilita o botão e pinta de verde
            keyButton_el.classList.add("btn-success", "disabled");

            //revela todas a letra na palavra
            revealedGameWord = revealedWordEx(gameWord);
            word_el.textContent = revealedGameWord;

            //Se a parte revelada da palavra não possuir _ significa que todas as letras foram encontradas antes dele perder o jogo
            if (!revealedGameWord.includes("_")) {
              gameWin(keyboard_el.innerHTML)
            }




          }
        }
      
      } else {
        //errou a letra
        keyProps.hasWord = false;
        //desabilita e pinta de vermelho
        keyButton_el.classList.add("btn-failed", "disabled");
        qntErros++;

        //baseado na quantidade de erro, partes do boneco são reveladas
        if (!gameOver) {
          switch (qntErros) {
            case 1:
              document.querySelector("#head").style.display = 'block';
              break;
            case 2:
              document.querySelector("#core").style.display = 'block';
              break;
            case 3:
              document.querySelector("#right-arm").style.display = 'block';
              break;
            case 4:
              document.querySelector("#left-arm").style.display = 'block';
              break;
            case 5:
              document.querySelector("#left-leg").style.display = 'block';
              break;
            case 6:
              //perdeu
              document.querySelector(".forca").innerHTML = gameOver_svg;
              gameOver = true;
              setTimeout(() => {
                alert(`Você Errou! 😥 a palavra era ${gameWord}`)
              }, 10)
              break;
          }
        }
      }
    };
    
    //Esses ifs são usados apenas para manter as teclas organizadas e não dispostas totalmente na mesma linha
    if (idx <= 9) {
      div1_el.appendChild(keyButton_el);
    } else if (idx <= 19) {
      div2_el.appendChild(keyButton_el);
    } else {
      div3_el.appendChild(keyButton_el);
    }


    //e por fim inclui cada uma das linhas no teclado
    keyboard_el.appendChild(div1_el);
    keyboard_el.appendChild(div2_el);
    keyboard_el.appendChild(div3_el);

    word_el.textContent = revealedWordEx(gameWord)
  })
}

//Essa função vai pegar a palavra a ser descoberta e vai relevar apenas as letras já clicadas no teclado
function revealedWordEx(word) {
  let wordRevealed = word;
  if(/[ÁÀÂÃÉÈÍÏÓÔÕÖÚ]/g.test(wordRevealed)) {
    keyboardKeys.forEach(keyProps => {
      //Percorre as teclas e para cada tecla verifica se ela foi clicada ou não e também verifica se a palavra secreta possui essa letra, se não foi pressionada e possui a letra, será substituido por _ mas se possuir e já tiver sido clicada, vai mostrar a letra.

       if (/[AEIOU]/g.test(keyProps.key)) {
        const correspondingAccentLetters = wordRevealed.match(handleLetterAccent[keyProps.key]);
        if (correspondingAccentLetters && keyProps.pressed === false) {
          correspondingAccentLetters.forEach((letter) => {
            wordRevealed = wordRevealed.replaceAll(letter, "_");
          })
        }
      } 
      if (wordRevealed.includes(keyProps.key) && keyProps.pressed === false) {
        wordRevealed = wordRevealed.replaceAll(keyProps.key, "_");
      } 
    })
  } else {
    keyboardKeys.forEach(keyProps => {
    
      //Percorre as teclas e para cada tecla verifica se ela foi clicada ou não e também verifica se a palavra secreta possui essa letra, se não foi pressionada e possui a letra, será substituido por _ mas se possuir e já tiver sido clicada, vai mostrar a letra.
      if(wordRevealed.includes(keyProps.key) && keyProps.pressed === false) {
        wordRevealed = wordRevealed.replaceAll(keyProps.key, "_");
      }
    })
  }

  return wordRevealed;
}

startGame()