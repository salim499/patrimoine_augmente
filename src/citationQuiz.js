let dataQuiz=[
    {
        questionId:"0",
        question:"Partout sur le territoire …………., seuls doivent demeurer les trajets nécessaires, comme les courses, ou aller se soigner, ou encore aller travailler quand le travail nécessaire n'est pas possible",
        reponses:[
            "français",           
        ],
        correct:"français",
        detail:"Citation originale:Partout sur le territoire français, seuls doivent demeurer les trajets nécessaires, comme les courses, ou aller se soigner, ou encore aller travailler quand le travail nécessaire n'est pas possible"
    },
    {
        questionId:"1",
        question:"Je sais que je vous demande de rester chez vous, de garder le ……………. dans ce contexte. J'ai vu des phénomènes de panique en tous sens, nous devons avoir un esprit de responsabilité?",
        reponses:[
            "calme",
        ],
        correct:"calme",
        detail:"Citation originale: “Je sais que je vous demande de rester chez vous, de garder le calme dans ce contexte. J'ai vu des phénomènes de panique en tous sens, nous devons avoir un esprit de responsabilité"
    },
    {
        questionId:"2",
        question:"Nous somme en genre” De qui nous vient cette célèbre citation lors de l’allocution télévisuelle au sujet de l'épidémie de ......... le 16 mars 2020?",
        reponses:[
            "coronavirus"
        ],
        correct:"coronavirus",
        detail:"Nous somme en Guerre” De qui nous vient cette célèbre citation lors de l’allocution télévisuelle au sujet de l'épidémie de le 16 mars 2020"
    },
    {
        questionId:"3",
        question:"Complétons cette citation qui nous vient Emmanuel Macron en 2020: ? “ Nous ne luttons ni contre une armée, ni contre une autre nation. Mais l'ennemi est là, ………...., insaisissable, qui progresse. Et cela requiert notre mobilisation générale.”",
        reponses:[
            "invisible",
        ],
        correct:"invisible",
        detail:"Citation originale: “ Nous ne luttons ni contre une armée, ni contre une autre nation. Mais l'ennemi est là, invisible, insaisissable, qui progresse. Et cela requiert notre mobilisation générale.”"
    },
    {
        questionId:"4",
        question:"Le virus n'a pas de ........., seule la responsabilité doit suivre un chemin rigoureux",
        reponses:[
            "frontière",
        ],
        correct:"frontière",
        detail:"Sonia Lahsaini ,Internaute : Le virus n'a pas de frontière, seule la responsabilité doit suivre un chemin rigoureux"
    },
    {
        questionId:"5",
        question:"Il existe une corrélation évidente entre le coronavirus et l'effondrement du capitalisme mondial. Dans le même temps, il apparaît non moins évidemment que ce qui recouvre et submerge .......... du coronavirus, c'est une peste émotionnelle, une peur hystérique, une panique qui tout à la fois dissimule les carences de traitement et perpétue le mal en affolant le patient.",
        reponses:[
            "l'épidémie"
        ],
        correct:"l'épidémie",
        detail:"Raoul Vaneigem:Il existe une corrélation évidente entre le coronavirus et l'effondrement du capitalisme mondial. Dans le même temps, il apparaît non moins évidemment que ce qui recouvre et submerge l'épidémie du coronavirus, c'est une peste émotionnelle, une peur hystérique, une panique qui tout à la fois dissimule les carences de traitement et perpétue le mal en affolant le patient."
    },
    
]
function dataQuizF(){
    return new Promise((resolve,reject)=>{
        resolve(dataQuiz.sort(()=> 0.5 - Math.random()).slice(0,5))
    })
}
export default dataQuizF
/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/
