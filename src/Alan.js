import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import devinettes from './devinettesQuizSync'
function App(){
/////////////////////////////////////////////////////////////////////

//bouton1
function choixReponse1(e){
    console.log(e.target.value)
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

//la question 1 
let [response1,setResponse1]=useState()
//la question 2 
let [response2,setResponse2]=useState()
//la question 3 
let [response3,setResponse3]=useState()
//la question 4 
let [response4,setResponse4]=useState()
//la question 5 
let [response5,setResponse5]=useState()

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

//////////////////////////////////////////////////////////////////////

console.log(devinettes())
const [alanInstance, setAlanInstance]=useState()

 const firstQuiz=useCallback((e)=>{
     console.log(e)
     alanInstance.playText(question1['question'])          
 },[alanInstance])
 const secondQuiz=useCallback((e)=>{
     alanInstance.playText(question2['question'])          
 },[alanInstance])
 const thirdQuiz=useCallback((e)=>{
     alanInstance.playText(question3['question'])          
 },[alanInstance])
const fourthQuiz=useCallback((e)=>{
     alanInstance.playText(question4['question'])          
 },[alanInstance])
const fifthQuiz=useCallback((e)=>{
     alanInstance.playText(question5['question'])          
 },[alanInstance,devinettes()])
/*const firstResponse=useCallback((e)=>{
    console.log(question1)
     if(e.detail.response.value==question1.correct){
        setTrouve1("Bonne")
      }
     setQuestion1Visible(true)
     question1.reponses=question1.reponses.filter(reponse=>reponse==e.target.value)
    
      setQuestion1(question1)       
},[])*/
function firstResponse(e){
    console.log(question1)
    if(e.detail.response.value==question1.correct){
       setTrouve1("Bonne")
     }
    setQuestion1Visible(true)
  question1.reponses=question1.reponses.filter(reponse=>reponse==e.target.value)
   
     setQuestion1(question1)   
}
const secondResponse=useCallback((e)=>{
    if(e.detail.response.value==question2.correct){
        setTrouve2("Bonne")
      }
      setQuestion2Visible(true)
      question2.reponses=question2.reponses.filter(reponse=>reponse==e.target.value)
      setQuestion2(question2)          
},[alanInstance])
const thirdResponse=useCallback((e)=>{
    if(e.detail.response.value==question3.correct){
        setTrouve3("Bonne")
      }
      setQuestion3Visible(true)
      question3.reponses=question3.reponses.filter(reponse=>reponse==e.target.value)
      setQuestion3(question3)        
},[alanInstance])
const fourthResponse=useCallback((e)=>{
    if(e.detail.response.value==question4.correct){
        setTrouve4("Bonne")
      }
      setQuestion4Visible(true)
      question4.reponses=question4.reponses.filter(reponse=>reponse==e.target.value)
      setQuestion4(question4)         
},[alanInstance])
const fifthResponse=useCallback((e)=>{
    if(e.detail.response.value==question5.correct){
        setTrouve5("Bonne")
      }
      setQuestion5Visible(true)
      question5.reponses=question5.reponses.filter(reponse=>reponse==e.target.value)
      setQuestion5(question5)        
},[alanInstance])

useEffect(()=>{
window.addEventListener("1",firstQuiz)
 return ()=>{
     window.removeEventListener("1",firstQuiz)
}
},[firstQuiz])
useEffect(()=>{
 window.addEventListener("2",secondQuiz)
     return ()=>{
         window.removeEventListener("2",secondQuiz)
 }
},[secondQuiz])
useEffect(()=>{
 window.addEventListener("3",thirdQuiz)
     return ()=>{
         window.removeEventListener("3",thirdQuiz)
 }
},[thirdQuiz])
useEffect(()=>{
 window.addEventListener("4",fourthQuiz)
     return ()=>{
         window.removeEventListener("4",fourthQuiz)
 }
},[fourthQuiz])
useEffect(()=>{
 window.addEventListener("5",fifthQuiz)
     return ()=>{
         window.removeEventListener("5",fifthQuiz)
 }
},[fifthQuiz])
useEffect(()=>{
    window.addEventListener("5",fifthQuiz)
        return ()=>{
            window.removeEventListener("5",fifthQuiz)
    }
   },[fifthQuiz])
useEffect(()=>{
 window.addEventListener("r1",firstResponse)
     return ()=>{
         window.removeEventListener("r1",firstResponse)
 }
},[])
useEffect(()=>{
    window.addEventListener("r2",secondResponse)
        return ()=>{
            window.removeEventListener("r2",secondResponse)
    }
},[secondResponse])
useEffect(()=>{
    window.addEventListener("r3",thirdResponse)
        return ()=>{
            window.removeEventListener("r3",thirdResponse)
    }
},[thirdResponse])
useEffect(()=>{
    window.addEventListener("r4",fourthResponse)
        return ()=>{
            window.removeEventListener("r4",fourthResponse)
    }
},[fourthResponse])
useEffect(()=>{
    window.addEventListener("r5",fifthResponse)
        return ()=>{
            window.removeEventListener("r5",fifthResponse)
    }
},[fifthResponse])

useEffect(()=>{

 setAlanInstance(
     alanBtn({ 
         top:"5%",
         left:"5%",
         key: '0e0e29dfcbb6e6854937999f179a07f42e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: (commandData) => {
             const event=new CustomEvent(commandData.command,{
                detail:{
                    response:commandData.response
                }
             })
             window.dispatchEvent(event)
         }
       })       
     )

 },[]) 
 useEffect(()=>{
    setQuestion1(devinettes()[0])
    setQuestion2(devinettes()[1])
    setQuestion3(devinettes()[2])
    setQuestion4(devinettes()[3])
    setQuestion5(devinettes()[4])
    setN(true)
 },[n==false])
 

////////////////////////////////////////////////////////////////////////

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
    )
}
export default App