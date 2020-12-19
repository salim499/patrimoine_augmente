import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './App.css';
import dataQuiz from './dataQuiz'
import { useEffect, useState } from 'react';

function App() {

  const [res1,setRes1]=useState(false)
  const [res2,setRes2]=useState(false)
  const [res3,setRes3]=useState(false)
  const [res4,setRes4]=useState(false)
  const [res5,setRes5]=useState(false)
 //bouton1
 function choixReponse1(e){
   if(e.target.value==question1.correct){
     setTrouve1("Bonne")
   }
  setQuestion1Visible(true)
  question1.reponses=question1.reponses.filter(reponse=>reponse==e.target.value)

   setQuestion1(question1)
 }
 //bouton2
 function choixReponse2(e){
   if(e.target.value==question2.correct){
     setTrouve2("Bonne")
   }
   setQuestion2Visible(true)
   question2.reponses=question2.reponses.filter(reponse=>reponse==e.target.value)
   setQuestion2(question2)
 }
 //bouton3
 function choixReponse3(e){
   if(e.target.value==question3.correct){
     setTrouve3("Bonne")
   }
   setQuestion3Visible(true)
   question3.reponses=question3.reponses.filter(reponse=>reponse==e.target.value)
   setQuestion3(question3)
 }
 //bouton4
 function choixReponse4(e){
   if(e.target.value==question4.correct){
     setTrouve4("Bonne")
   }
   setQuestion4Visible(true)
   question4.reponses=question4.reponses.filter(reponse=>reponse==e.target.value)
   setQuestion4(question4)
 }
 //bouton5
 function choixReponse5(e){
   if(e.target.value==question5.correct){
     setTrouve5("Bonne")
   }
   setQuestion5Visible(true)
   question5.reponses=question5.reponses.filter(reponse=>reponse==e.target.value)
   setQuestion5(question5)
 }


 //la question 1 
 let [question1,setQuestion1]=useState()
 //la question 2 
 let [question2,setQuestion2]=useState()
 //la question 3 
 let [question3,setQuestion3]=useState()
 //la question 4 
 let [question4,setQuestion4]=useState()
 //la question 5 
 let [question5,setQuestion5]=useState()

 let [n, setN]=useState(false)

 const [question1Visible,setQuestion1Visible]=useState(false)
 const [question2Visible,setQuestion2Visible]=useState(false)
 const [question3Visible,setQuestion3Visible]=useState(false)
 const [question4Visible,setQuestion4Visible]=useState(false)
 const [question5Visible,setQuestion5Visible]=useState(false)

 const [trouve1,setTrouve1]=useState("Mauvaise")
 const [trouve2,setTrouve2]=useState("Mauvaise")
 const [trouve3,setTrouve3]=useState("Mauvaise")
 const [trouve4,setTrouve4]=useState("Mauvaise")
 const [trouve5,setTrouve5]=useState("Mauvaise")

 //Enregistrer tous les 5 objets de questions recupérer
 useEffect(()=>{
     dataQuiz().then(e=>{
       setQuestion1(e[0])
       setQuestion2(e[1])
       setQuestion3(e[2])
       setQuestion4(e[3])
       setQuestion5(e[4])     
     })
  
     setN(true)
 },false)

 const SpeechRegognition=window.SpeechRecognition || window.webkitSpeechRecognition

 const recognition=new SpeechRegognition()

 recognition.continuous=false

 recognition.onstart=function(){
   console.log("en ecoute")
 }
 recognition.onresult=function(e){
   if(res1===true){
     if((e.results[0][0]['transcript']).includes(question1.correct)
     ||(question1.correct).includes(e.results[0][0]['transcript'])){
       setTrouve1("Bonne")
     }
    setQuestion1Visible(true)
    question1.reponses=question1.reponses.filter(reponse=>reponse==e.target.value)
 
     setQuestion1(question1)      
   }
  else if(res2===true){
   if((e.results[0][0]['transcript']).includes(question2.correct)
   ||(question2.correct).includes(e.results[0][0]['transcript'])){
     setTrouve2("Bonne")
   }
  setQuestion2Visible(true)
  question2.reponses=question2.reponses.filter(reponse=>reponse==e.target.value)

   setQuestion1(question2) 
  }
  else if(res3===true){
   if((e.results[0][0]['transcript']).includes(question3.correct)
   ||(question3.correct).includes(e.results[0][0]['transcript'])){
     setTrouve3("Bonne")
   }
  setQuestion3Visible(true)
  question3.reponses=question3.reponses.filter(reponse=>reponse==e.target.value)

   setQuestion3(question3) 
  }
  else if(res4===true){
   if((e.results[0][0]['transcript']).includes(question4.correct)
   ||(question4.correct).includes(e.results[0][0]['transcript'])){
     setTrouve4("Bonne")
   }
  setQuestion4Visible(true)
  question4.reponses=question4.reponses.filter(reponse=>reponse==e.target.value)

   setQuestion4(question4) 
  }
  else {
   if((e.results[0][0]['transcript']).includes(question5.correct)
   ||(question5.correct).includes(e.results[0][0]['transcript'])){
     setTrouve5("Bonne")
   }
  setQuestion5Visible(true)
  question5.reponses=question5.reponses.filter(reponse=>reponse==e.target.value)

   setQuestion5(question5) 
  }
 }

 function readOutLoad(e){
   let Speech = new SpeechSynthesisUtterance(e)
   Speech.volume = 1 // 0 to 1
   Speech.rate = 1 // 0.1 to 10
   Speech.pitch = 1.5 //0 to 2
   Speech.lang = 'fr-FR'
   window.speechSynthesis.speak(Speech)
}
function ecouterText(e){
  if (e.target.name==="0"){
   readOutLoad(question1.detail)
  } else if (e.target.name=="1"){
   readOutLoad(question2.detail)      
  } else if (e.target.name=="2"){
   readOutLoad(question3.detail)           
  } else if (e.target.name=="3"){
   readOutLoad(question4.detail)       
  } else {
   readOutLoad(question5.detail)       
  }
}

  function ecouterQuestion(e){
    if (e.target.name==="0"){
     readOutLoad(question1.question)
    } else if (e.target.name=="1"){
     readOutLoad(question2.question)      
    } else if (e.target.name=="2"){
     readOutLoad(question3.question)           
    } else if (e.target.name=="3"){
     readOutLoad(question4.question)       
    } else {
     readOutLoad(question5.question)       
    }
  }
  function ecouterResponse(e){
   if (e.target.name==="0"){
     setRes1(true)
     setRes2(false)
     setRes3(false)
     setRes4(false)
     setRes5(false)
    } else if (e.target.name=="1"){
     setRes1(false)
     setRes2(true)
     setRes3(false)
     setRes4(false)
     setRes5(false)    
    } else if (e.target.name=="2"){
     setRes1(false)
     setRes2(false)
     setRes3(true)
     setRes4(false)
     setRes5(false)          
    } else if (e.target.name=="3"){
     setRes1(false)
     setRes2(false)
     setRes3(false)
     setRes4(true)
     setRes5(false)      
    } else {
     setRes1(false)
     setRes2(false)
     setRes3(false)
     setRes4(false)
     setRes5(true)      
    }
    recognition.start()
  }

 return (
   <div className="Container">
     {(question1 && question2 && question3 && question4 && question5)?
    <React.Fragment>
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"black"}}>
<Card.Header>
  <Card.Title className="grandTitre">
     DevinetteQuiz
    </Card.Title>
    </Card.Header>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

  <Card.Title className="titre">
  <h5 className="detail">{question1.detail}</h5>
    {question1.question}
    </Card.Title>

<Card.Body>
{question1.reponses.map((val,key)=>(
  <Button className="playBtn" variant="primary" key={key} value={val} onClick={choixReponse1}>{val}</Button>
  ))}
  <Card.Text  style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>
    <Button name="0" onClick={ecouterText}>Text</Button>   
    <Button name="0" onClick={ecouterQuestion}>question</Button>
    <Button name="0" onClick={ecouterResponse}>response</Button>
  </Card.Text>
  <Card.Text style={{marginRight:"29%"}}>
  {question1Visible?
    <React.Fragment>
    <h4 className={trouve1}>{trouve1+" réponse"}</h4><br/>
    <h4 className="correction">La bonne réponse est : {question1.correct}</h4><br/>
    </React.Fragment>
    :null}
  </Card.Text>
</Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

  <Card.Title className="titre">
  <h5 className="detail">{question2.detail}</h5>
   {question2.question}
    </Card.Title>

<Card.Body>
{question2.reponses.map((val,key)=>(
  <Button className="playBtn" variant="primary" key={key} value={val} onClick={choixReponse2}>{val}</Button>
  ))}
     <Card.Text style={{alignContent:"center", alignContent:"center",marginRight:"30%"}}>
    <Button name="1" onClick={ecouterText}>Text</Button> 
    <Button name="1" onClick={ecouterQuestion}>question</Button>
    <Button name="1" onClick={ecouterResponse}>response</Button>
  </Card.Text>
  
  <Card.Text style={{marginRight:"29%"}}>
  {question2Visible?
    <React.Fragment>
    <h4 className={trouve2}>{trouve2+" réponse"}</h4><br/>
    <h4 className="correction">La bonne réponse est : {question2.correct}</h4><br/>
    </React.Fragment>
    :null}
  </Card.Text>
</Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

  <Card.Title className="titre">
  <h5 className="detail">{question3.detail}</h5>
   {question3.question}
    </Card.Title>

<Card.Body>
{question3.reponses.map((val,key)=>(
  <Button className="playBtn" variant="primary" key={key} value={val} onClick={choixReponse3}>{val}</Button>
  ))}
    <Card.Text style={{alignContent:"center", alignContent:"center",marginRight:"30%"}}>
    <Button name="2" onClick={ecouterText}>Text</Button> 
    <Button name="2" onClick={ecouterQuestion}>question</Button>
    <Button name="2" onClick={ecouterResponse}>response</Button>
  </Card.Text>
  <Card.Text style={{marginRight:"29%"}}>
  {question3Visible?
    <React.Fragment>
     <h4 className={trouve3}>{trouve3+" réponse"}</h4><br/>
    <h4 className="correction">La bonne réponse est : {question3.correct}</h4><br/>
    </React.Fragment>
    :null}
  </Card.Text>
</Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

  <Card.Title className="titre">
  <h5 className="detail">{question4.detail}</h5>
   {question4.question}
    </Card.Title>

<Card.Body>
{question4.reponses.map((val,key)=>(
  <Button className="playBtn" variant="primary" key={key} value={val} onClick={choixReponse4}>{val}</Button>
  ))}
    <Card.Text style={{alignContent:"center", alignContent:"center",marginRight:"30%"}}>
    <Button name="3" onClick={ecouterText}>Text</Button> 
    <Button name="3" onClick={ecouterQuestion}>question</Button>
    <Button name="3" onClick={ecouterResponse}>response</Button>
  </Card.Text>
  <Card.Text style={{marginRight:"29%"}}>
  {question4Visible?
    <React.Fragment>
    <h4 className={trouve4}>{trouve4+" réponse"}</h4><br/>
    <h4 className="correction">La bonne réponse est : {question4.correct}</h4><br/>
    </React.Fragment>
    :null}
  </Card.Text>
</Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

  <Card.Title className="titre">
  <h5 className="detail">{question5.detail}</h5>
    {question5.question}
    </Card.Title>

<Card.Body>
  {question5.reponses.map((val,key)=>(
  <Button className="playBtn" variant="primary" key={key} value={val} onClick={choixReponse5}>{val}</Button>
  ))}
    <Card.Text style={{alignContent:"center", alignContent:"center",marginRight:"30%"}}>
    <Button name="4" onClick={ecouterText}>Text</Button> 
    <Button name="4" onClick={ecouterQuestion}>question</Button>
    <Button name="4" onClick={ecouterResponse}>response</Button>
  </Card.Text>
  <Card.Text style={{marginRight:"29%"}}>
    {question5Visible?
    <React.Fragment>
      <h4 className={trouve5}>{trouve5+" réponse"}</h4><br/>
    <h4 className="correction">La bonne réponse est : {question5.correct}</h4><br/>
    </React.Fragment>
    :null}
  </Card.Text>
</Card.Body>
</Card>   
</React.Fragment>   
     :<h1>Chargement en cours</h1>}
   </div>
   );
}

export default App;
