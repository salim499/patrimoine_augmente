
import React from 'react'
import { useState } from "react";
import Question from './Question'
import Devinette from './Devinettes'
import Citation from './citations'
import Header from './header'
import Footer from './footer'
import './Acceuil.css'
import Alan from './Alan'

function App() {
    const Quiz="quiz"
    const Devinettes="devinettes"
    const Citations="citations"
    const Lecture="lecture"
    const rien="pas bien compris, veuillez choisir à nouveau"
    const discoursAcceuil=`Bienvenue sur l'application peste covid.
    Notre application vous offre une expèrience spécial.
    Chez nous tu peut lire.
    Mais pas que ça tu peu aussi jouer, quelle chance.
    Si tu veux lire dit lecture.
    Si tu veux jouer au quiz il suffit de dire quiz. 
    Si tu veux compléter les citations il suffit de dire citation. 
    Si tu veux trouver des devinettes il suffit de dire devinettes. 
    Merci à vous`

    const [textRecuperer, setTextRecuperer]=useState("debut")

    const SpeechRegognition=window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition=new SpeechRegognition()

    recognition.continuous=false
 

    recognition.onstart=function(){
        console.log("en ecoute")
    }

    recognition.onresult=function(e){
        console.log(e)
        
        if(e.results[0][0]['transcript']===null){
            setTextRecuperer("debutt"+Math.random())              
        }
        else if(
            e.results[0][0]['transcript'].includes(Quiz) ||
            Quiz.includes(e.results[0][0]['transcript'])
        )
        {
            setTextRecuperer(Quiz)
            setJeu(2)
        }
        else if(
            e.results[0][0]['transcript'].includes(Devinettes) ||
            Devinettes.includes(e.results[0][0]['transcript'])            
        )
        {
            setTextRecuperer(Devinettes)  
            setJeu(3)          
        }
        else if(
            e.results[0][0]['transcript'].includes(Citations) ||
            Citations.includes(e.results[0][0]['transcript'])            
        )
        {
            setTextRecuperer(Citations)     
            setJeu(4)       
        }
        else if(
            e.results[0][0]['transcript'].includes(Lecture) ||
            Lecture.includes(e.results[0][0]['transcript'])            
        )
        {
            setTextRecuperer(Lecture)   
            document.location.href="https://salim499.github.io/esssai/projet/"  
            //window.open("https://salim499.github.io/esssai/projet/","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")       
        }
        else {
            setTextRecuperer("debut"+Math.random())  
        }
    }

    let Speech = new SpeechSynthesisUtterance(discoursAcceuil)
    Speech.volume = 1 // 0 to 1
    Speech.rate = 6 // 0.1 to 10
    Speech.pitch = 1.5 //0 to 2
    Speech.lang = 'fr-FR'
  
    Speech.onend=function(){
        const event=new CustomEvent("startChoix")
        window.dispatchEvent(event) 
    }

    function readOutLoad(){
        window.speechSynthesis.speak(Speech)
    }


  function startChoix(){
    recognition.start()
  }

   window.addEventListener("startChoix",startChoix)



    function voiceAcceuil(e){
        readOutLoad()
    }
 
 ////////////////////////////////////////////////////////////////////////
  const [jeu, setJeu]=useState(1)
  
  function choix(e){
    console.log(e.target.name)
    if(e.target.name==="Quiz"){
      setJeu(2)
    } else if(e.target.name==="Devinettes"){
      setJeu(3)
    } else if(e.target.name==="Citations"){      
      setJeu(4)
    } else if (e.target.name==="Lecture"){
      setJeu(5)
    }
  }
  function choixAcceuil(e){
    setJeu(1)  
  }

  return (
    <div onClick={voiceAcceuil}>
   {jeu===1?
    <div className="bodys">
         <Header></Header>
    <button className="button" id="button" name="Quiz" onClick={choix}>Quiz</button><br/>
    <button className="button" name="Devinettes" onClick={choix}>Devinettes</button><br/>
    <br/>
    <button className="button" name="Citations" onClick={choix}>Citations</button>
    <a href="https://salim499.github.io/esssai/projet/">    
    <button className="button" name="Lecture" onClick={choix}>Lecture</button>    
    </a><br/>  
    <Footer></Footer>
    </div>
  :jeu===2?
  <React.Fragment>
  <Question></Question>
  <button style={{height:"60px",width:"130px",marginLeft:"45%",backgroundColor:"black",color:"white"}}  name="Lecture" onClick={choixAcceuil}>Acceuil</button> 
  <br/>
  {""}
  </React.Fragment>
  :jeu===3?
  <React.Fragment>
<Devinette></Devinette>
  <button style={{height:"60px",width:"130px",marginLeft:"45%",backgroundColor:"black",color:"white"}}  name="Lecture" onClick={choixAcceuil}>Acceuil</button> 
  <br/>
  {""}
  </React.Fragment>
  :jeu===4?
  <React.Fragment>
  <Citation></Citation>
  <button style={{height:"60px",width:"130px",marginLeft:"45%",backgroundColor:"black",color:"white"}}  name="Lecture" onClick={choixAcceuil}>Acceuil</button>
  <br/>
  {""}
  </React.Fragment>
  :null
  } 
</div>
    );
}

export default App;
