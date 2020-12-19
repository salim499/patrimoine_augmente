import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './App.css';
import dataQuiz from './citationQuiz'
import { useEffect, useState, useRef } from 'react';
function App() {

    const refQuestion11=useRef()
    const refQuestion21=useRef()
    const refQuestion31=useRef()
    const refQuestion41=useRef()
    const refQuestion51=useRef()

  //bouton1
  function choixReponse1(e){
    if(refQuestion11.current.value==question1.reponses[0]){
      setTrouve1(" Bonne réponse")
    }
   setQuestion1Visible(true)
  }
  //bouton2
  function choixReponse2(e){
    if(refQuestion21.current.value==question2.reponses[0]){
      setTrouve2(" Bonne réponse")
    }
   setQuestion2Visible(true)
  }
  //bouton3
  function choixReponse3(e){
    if(refQuestion31.current.value==question3.reponses[0]){
      setTrouve3(" Bonne réponse")
    }
   setQuestion3Visible(true)
  }
  //bouton4
  function choixReponse4(e){
    if(refQuestion41.current.value==question4.reponses[0]){
      setTrouve4(" Bonne réponse")
    }
   setQuestion4Visible(true)
  }
  //bouton5
  function choixReponse5(e){
    if(refQuestion51.current.value==question5.reponses[0]){
      setTrouve5(" Bonne réponse")
    }
   setQuestion5Visible(true)
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

  const [trouve1,setTrouve1]=useState("Aucune bonne réponse")
  const [trouve2,setTrouve2]=useState("Aucune bonne réponse")
  const [trouve3,setTrouve3]=useState("Aucune bonne réponse")
  const [trouve4,setTrouve4]=useState("Aucune bonne réponse")
  const [trouve5,setTrouve5]=useState("Aucune bonne réponse")

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

  const [res1,setRes1]=useState(false)
  const [res2,setRes2]=useState(false)
  const [res3,setRes3]=useState(false)
  const [res4,setRes4]=useState(false)
  const [res5,setRes5]=useState(false)

  const SpeechRegognition=window.SpeechRecognition || window.webkitSpeechRecognition

  const recognition=new SpeechRegognition()

  recognition.continuous=false

  recognition.onstart=function(){
    console.log("en ecoute")
  }
  recognition.onresult=function(e){
    if(res1===true){
      refQuestion11.current.value=e.results[0][0]['transcript']
    } else if (res2===true){
      refQuestion21.current.value=e.results[0][0]['transcript']     
    } else if (res3===true){
      refQuestion31.current.value=e.results[0][0]['transcript']
    } else if (res4===true){
      refQuestion41.current.value=e.results[0][0]['transcript']
    } else if (res5===true){
      refQuestion51.current.value=e.results[0][0]['transcript']
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
      CitationQuiz
     </Card.Title>
     </Card.Header>
</Card> 
 <Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

   <Card.Title className="titre">
     {question1.question}
     </Card.Title>

 <Card.Body>
 <input ref={refQuestion11} type="text" name={question1.reponses[0]}></input>
 <Button name="0" onClick={ecouterQuestion}>question</Button>
 <Button name="0" onClick={ecouterResponse}>response</Button>
 <Button className="playBtn" variant="primary" onClick={choixReponse1}>valider</Button>
   <Card.Text style={{marginRight:"29%"}}>
   {question1Visible?
     <React.Fragment>
     <h4 className={trouve1}>{trouve1}</h4><br/>
     <h4 className="correction">La bonne réponse est : {question1.correct}</h4><br/>
     <h5 className="detail">{question1.detail}</h5>
     </React.Fragment>
     :null}
   </Card.Text>
 </Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

   <Card.Title className="titre">
    {question2.question}
     </Card.Title>

 <Card.Body>
 <input ref={refQuestion21} type="text" name={question2.reponses[0]}></input>
 <Button name="1" onClick={ecouterQuestion}>question</Button>
 <Button name="1" onClick={ecouterResponse}>response</Button>
 <Button className="playBtn" variant="primary" onClick={choixReponse2}>valider</Button>
   <Card.Text style={{marginRight:"29%"}}>
   {question2Visible?
     <React.Fragment>
     <h4 className={trouve2}>{trouve2}</h4><br/>
     <h4 className="correction">La bonne réponse est : {question2.correct}</h4><br/>
     <h5 className="detail">{question2.detail}</h5>
     </React.Fragment>
     :null}
   </Card.Text>
 </Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

   <Card.Title className="titre">
    {question3.question}
     </Card.Title>

 <Card.Body>
 <input ref={refQuestion31} type="text" name={question3.reponses[0]}></input>
    <Button name="2" onClick={ecouterQuestion}>question</Button>
    <Button name="2" onClick={ecouterResponse}>response</Button>
 <Button className="playBtn" variant="primary" onClick={choixReponse3}>valider</Button>
   <Card.Text style={{marginRight:"29%"}}>
   {question3Visible?
     <React.Fragment>
      <h4 className={trouve3}>{trouve3}</h4><br/>
     <h4 className="correction">La bonne réponse est : {question3.correct}</h4><br/>
     <h5 className="detail">{question3.detail}</h5>
     </React.Fragment>
     :null}
   </Card.Text>
 </Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

   <Card.Title className="titre">
    {question4.question}
     </Card.Title>

 <Card.Body>
 <input ref={refQuestion41} type="text" name={question4.reponses[0]}></input>
 <Button name="3" onClick={ecouterQuestion}>question</Button>
  <Button name="3" onClick={ecouterResponse}>response</Button>
 <Button className="playBtn" variant="primary" onClick={choixReponse4}>valider</Button>
   <Card.Text style={{marginRight:"29%"}}>
   {question4Visible?
     <React.Fragment>
     <h4 className={trouve4}>{trouve4}</h4><br/>
     <h4 className="correction">La bonne réponse est : {question4.correct}</h4><br/>
     <h5 className="detail">{question4.detail}</h5>
     </React.Fragment>
     :null}
   </Card.Text>
 </Card.Body>
</Card> 
<Card className="text-center" style={{marginLeft:"20%",marginRight:"20%",backgroundColor:"rgba(200,200,200,1)"}}>

   <Card.Title className="titre">
     {question5.question}
     </Card.Title>

 <Card.Body>
 <input ref={refQuestion51} type="text" name={question5.reponses[0]}></input>
 <Button name="4" onClick={ecouterQuestion}>question</Button>
 <Button name="4" onClick={ecouterResponse}>response</Button>
 <Button className="playBtn" variant="primary" onClick={choixReponse5}>valider</Button>
   <Card.Text style={{marginRight:"29%"}}>
     {question5Visible?
     <React.Fragment>
       <h4 className={trouve5}>{trouve5}</h4><br/>
     <h4 className="correction">La bonne réponse est : {question5.correct}</h4><br/>
     <h5 className="detail">{question5.detail}</h5>
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
