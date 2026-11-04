/**
 * Extraits de code originaux du PDF pour les pages 16 a 219.
 * La mise en forme est normalisee lorsque le PDF coupe les lignes, mais les
 * noms de variables, fonctions et composants sont conserves.
 */
export const snippetsPre = {
  /* ---------- Partie 1 : JavaScript avance ---------- */

  classesJs: `class Etudiant{
  constructor(nom,age){
    this.nom=nom; this.age=age
  }
  info(){
    return \`Etudiant nom:\${this.nom} a pour age:\${this.age}\`
  }
}

class Stagiaire extends Etudiant{
  constructor(nom,age,stage){
    super(nom,age);
    this.stage=stage;
  }
  info(){
    return \`\${super.info()} stage:\${this.stage}\`
  }
}

let et1= new Etudiant("Rami",23); console.log(et1.info());
let et2= new Etudiant("Karimi",21) ; console.log(et2.info());
let stg1= new Stagiaire("Rami",23,"dev mobile"); console.log(stg1.info());
let stg2= new Stagiaire("Karimi",21,"dev web") console.log(stg2.info());`,

  modulesJs: `// Module Etudiant.js
const Etablissement='ISGI'
class Etudiant{
  constructor(nom,age){ this.nom=nom; this.age=age }
}
function info(etudiant){
  return \`nom:\${etudiant.nom} age:\${etudiant.age}\`
}
export default Etudiant
export {Etablissement,info}

// Module Index.js
import Etudiant,{Etablissement,info} from './Etudiant.js'
let etd1= new Etudiant("Rami",33)
console.log(info(etd1))

// Utilisation des alias
import Etd,{Etablissement as Etab,info} from './Etudiant.js'
let etd1= new Etd("Rami",33)
console.log(info(etd1)+" Etablissement: "+Etab)

// index.html
<script src="Index.js" type="module"></script>`,

  templateLiterals: `const salutation="salut "
const nom="Rami"

//avec template literal
console.log(\`\${salutation} \${nom}\`)

//est identique a
console.log(salutation+" "+nom)`,

  ternaire: `let isMember=true;
let remise=isMember==true?0.2:0.1
console.log("remise: ",remise)`,

  ternaireNull: `let nom
let salutation=nom?"salut "+nom:"inconnu"
console.log(salutation)

let nom="Rami"
let salutation=nom?"salut "+nom:"inconnu"
console.log(salutation)`,

  destructuring: `const personne={ nom:"fatihi", age:23,
  adresse:{rue:14,ville:"casa"}
}
const nom=personne.nom
const age=personne.age
const rue=personne.adresse.rue
const ville=personne.adresse.ville
console.log(nom,age,rue,ville)

//est identique a:
const {nom,age,adresse:{rue},adresse:{ville}}=personne
console.log(nom,age,rue,ville)

// Destructing avec fonction
function presentation({nom,age,adresse:{rue},adresse:{ville}}){
  console.log("salut ",nom,age,rue,ville)
}
presentation(personne)`,

  map: `const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];
const noms=personnes.map(function(pers){return pers.nom})
console.log(noms)

// Exercice 1
// Soit l'Array nums=[2,5,8,7,3]
// Utiliser map pour creer un Array contenant les elements multiplies par 3`,

  filter: `const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];
const persAgés=personnes.filter(function(pers){return pers.age>=35})
console.log(persAgés)

// Exercice 2 : avec map et filter, creer nomAgés contenant les noms
// des personnes dont estMember est true`,

  find: `const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];
const pers1=personnes.find(function(pers){return pers.age>=45})
console.log(pers1)`,

  reduce: `const clients = [
  { nom: "Rami", montant: 4500 },
  { nom: "Karimi", montant: 2300 },
  { nom: "Chaouki", montant: 5500 },
  { nom: "Ramoun", montant: 7700 },
];
const totalMontants=clients.reduce(function(total,client){
  return total+=client.montant
},0);
console.log(totalMontants)

// Destructing d'un array
let numbers=[10, 20, 30, 40, 50]
const [a, b,...rest] = numbers;
console.log(a,b,rest);

// Creer une copie d'un Array
const numbers2=[...numbers]
console.log(numbers2)`,

  swap: `let x=10;
let y=20;
[x,y]=[y,x]
console.log("x=",x," y=",y)`,

  recursivite: `function fact(n){
  if (n===0){
    return 1
  }
  else{
    return n* fact(n-1)
  }
}
console.log(fact(4))`,

  closure: `function compteur(){
  let count=0
  return function(){
    count++
    return count
  }
}
let next=compteur()
console.log(next())
console.log(next())
console.log(next())
console.log(next())`,

  horloge: `spanHeure=document.getElementById("spHeure")
spanMinute=document.getElementById("spMinute")
spanSecond=document.getElementById("spSecond")
let initTime={heure:10,minute:23,second:5}
let currentTime=initTime
let timer=null
function incrementer(temps){
  time={...temps}
  return function(){
    time.second++
    if(time.second>=60){
      time.second=0
      time.minute++
      if(time.minute>=60){
        time.minute=0
        time.heure++
      }
    }
    affiche(time)
    currentTime=time
    return time
  }
}
function affiche(time){
  spanHeure.innerHTML=time.heure;
  spanMinute.innerHTML=time.minute;
  spanSecond.innerHTML=time.second;
}
function stopTimer() {
  if(timer){
    clearInterval( timer);
  }
  timer = null;
}
function incrementerTimer() {
  stopTimer()
  let next=incrementer(currentTime)
  timer=setInterval(next,1000);
}`,

  arrowFonctions: `function somme(a,b){
  return a+b
}
const mySomme=(a,b)=>a+b
console.log(mySomme(3,4))

const fact3 = n => (n === 0 ? 1 : n * fact3(n - 1));

// L'operateur de propagation spread
function produit(a,b,c){
  return a*b*c
}
let numbers=[2,3,4]
console.log(produit(...numbers))`,

  puresFonctions: `let mutateValue = 10;
function impureFonction(newValue) {
  return mutateValue += newValue;
}
impureFonction(20)
console.log(mutateValue)
//rendu 30

let immutableValue=10
function pureFonction(newValue){
  return immutableValue+newValue
}
pureFonction(20)
console.log(immutableValue)
//rendu 10`,

  pureAppend: `//ajouter un element dans la liste
let myList=[1,2,3,4,5]
function pureAppend(value){
  let appendMyList=[...myList,value];
  return appendMyList;
}
console.log(pureAppend(10))
//rendu [1,2,3,4,5,10]
console.log(myList)
//rendu [1,2,3,4,5]

// Exercice 3 : ajouter une inscription en pure fonction
const inscriptions=[
  {id:10,nom:'Rami',filiere:'DEV'},
  {id:11,nom:'Kamali',filiere:'DEV'},
  {id:12,nom:'Fahmi',filiere:'DEV'},
  {id:13,nom:'Chaouki',filiere:'DEV'}
];`,

  pureInsert: `const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 3
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

let dontMutateInjection = [6, 7, 8];
function pureInject(index,newValue) {
  return [
    ...dontMutateInjection.slice(0, index),
    newValue,
    ...dontMutateInjection.slice(index)
  ]
}
console.log(pureInject(1,10))
//rendu [6,10,7,8]
console.log(dontMutateInjection)
//rendu [6,7,8]`,

  pureDelete: `const inscriptions=[
  {id:10,nom:'Rami',filiere:'DEV'},
  {id:11,nom:'Kamali',filiere:'DEV'},
  {id:12,nom:'Fahmi',filiere:'DEV'},
  {id:13,nom:'Chaouki',filiere:'DEV'}
];
function pureDeleteFonction(id){
  return [...inscriptions.filter((ins)=>ins.id!=id)]
}
let deleteInscriptions= pureDeleteFonction(12)
console.log('----pureDeleteFonction-------')
console.log(deleteInscriptions)
console.log(inscriptions)`,

  pureUpdate: `const notes=[
  {id:10,module:'Algorithme',note:15},
  {id:10,module:'POO',note:17},
  {id:11,module:'Algorithme',note:16},
  {id:11,module:'POO',note:14},
];
//pure fonction modification
function pureUpdateNote(id,module,note){
  const updatednotes= [
    ...notes.filter(note=> !(note.id===id && note.module===module)),
    {id:id,module:module,note:note}
  ]
  return updatednotes;
}
console.log("----pureUpdateNote-------")
console.log(pureUpdateNote(10,'POO',18))
console.log(notes)`,

  pureObjet: `personne={id:10,nom:'Rami'}

//changer un objet en utilisant pure fonction
function addAge(age){
  let pers= {...personne,age:age}
  return pers;
}
console.log('changer personne')
console.log(addAge(33))
console.log(personne)

// La fonction peut etre ecrite autrement
function addAge(age){
  return Object.assign({}, personne, {age:age});
}`,

  /* ---------- Partie 2 : React, JSX, props et state ---------- */

  publicIndexHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`,

  indexJsApp: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// src/App.js
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
export default App;`,

  jsxHello: `var p = <p>Hello React</p>; // Code JSX
console.log(p);
ReactDOM.render(p, document.getElementById("app"));

var liste = <ul>
  <li> Element1 </li>
  <li> Element2 </li>
  <li> Element3 </li>
  <li> Element4 </li>
  <li> Element5 </li>
</ul>;
ReactDOM.render(liste, document.getElementById("app"));

// Ajouts d'attributs dans le code JSX
var liste = <ul id="list1" className="red">
  <li> Element1 </li>
  <li> Element2 </li>
  <li> Element3 </li>
  <li> Element4 </li>
  <li> Element5 </li>
</ul>;
ReactDOM.render(liste, document.getElementById("app"));

// Attribut style en JSX
var liste = <ul id="list1" style={{listStyleType:"none", color:"red"}}>
  <li> Element1 </li>
  <li> Element2 </li>
  <li> Element3 </li>
  <li> Element4 </li>
  <li> Element5 </li>
</ul>;
ReactDOM.render(liste, document.getElementById("app"));`,

  jsxExpressions: `var color = "red";
var styleListe = { listStyleType:"none", color:color };
var elems = ["Element1", "Element2",
  "Element3", "Element4", "Element5"];
var liste = <ul id="list1" style={styleListe}>
  {
    elems.map((elem, index) =>
      <li key={index}>{elem}</li>
    )
  }
</ul>;
ReactDOM.render(liste, document.getElementById("app"));`,

  jsxFonction: `var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];

var ListeElements = function(props) {
  return <ul>
    {
      props.elems.map(function(elem, index) {
        return <li key={index} style={props.style}>{elem}</li>;
      })
    }
  </ul>
}
ReactDOM.render(
  <ListeElements elems={elems} style={{color:"red"}}/>,
  document.getElementById("app")
);

// Ecriture en destructurant l'objet props (ES6)
var ListeElements = function({elems, color}) {
  return <ul>
    {
      elems.map(function(elem, index) {
        return <li key={index} style={{color:color}}> {elem}</li>;
      })
    }
  </ul>
}
ReactDOM.render(<ListeElements elems={elems} color="red"/>, document.getElementById("app"));`,

  jsxElementComposant: `var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
var Element = function({color, elem}) {
  return <li style={{color:color}}>{elem}</li>;
}
var ListeElements = function({elems, color}) {
  return <ul>
    {
      elems.map(function(elem, index) {
        return <Element key={index} elem={elem} color={color} />
      })
    }
  </ul>
}
ReactDOM.render(<ListeElements elems={elems} color="red" />, document.getElementById("app"));`,

  jsxClasse: `var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];

class Element extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li style={{color:this.props.color}}>{this.props.elem}</li>
  }
}

class ListeElements extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ul>
      {
        this.props.elems.map((elem, index) => {
          return <Element key={index} elem={elem} color={this.props.color} />
        })
      }
    </ul>
  }
}
ReactDOM.render(<ListeElements elems={elems} color="red" />, document.getElementById("app"));`,

  jsxRegles: `// Un seul parent : React.Fragment
function ListeElements(props) {
  return <React.Fragment>
    <div>Element1</div>
    <div>Element2</div>
    <div>Element3</div>
  </React.Fragment>
}
ReactDOM.render(<ListeElements />, document.getElementById("app"));

// Commentaires dans le code JSX
function ListeElements(props) {
  return (
    <ul>
      <li>Element1</li>
      {/* <li>Element2</li>
      <li>Element3</li>*/}
      <li>Element4</li>
      <li>Element5</li>
    </ul>
  )
}

// Expression conditionnelle
function ListeElements(props) {
  return (
    <ul>
      { props.hideFirstItem ? null : <li>Element1</li> }
      <li>Element2</li>
      <li>Element3</li>
      <li>Element4</li>
      <li>Element5</li>
    </ul>
  )
}
ReactDOM.render(<ListeElements hideFirstItem={true} />, document.getElementById("app"));`,

  jsxVariables: `function App(){
  const nom = "Rami"
  const nombreArticle = 6
  const remise = nombreArticle > 5 ? "2%" : "0%"
  return (
    <div>
      <h1>Salut {nom}</h1>
      <p>Nombre d'articles : {nombreArticle}</p>
      <p>Remise : {remise}</p>
    </div>
  )
}
root.render(<App/>)`,

  jsxExercice: `import React from 'react'
import ReactDOM from 'react-dom/client'

function getAge(dateNaissance){
  const annee = new Date(dateNaissance).getFullYear()
  return new Date().getFullYear() - annee
}

export default function App(){
  const nom = "Rami"
  const prenom = "Ahmed"
  const dateNaissance = "2000-01-01"
  return (
    <div>
      <p>
        Nom : {nom} - Prenom : {prenom} - Age : {getAge(dateNaissance)}
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)`,

  jsxExerciceClasse: `class App extends React.Component{
  getAge(dateNaissance){
    const annee = new Date(dateNaissance).getFullYear()
    return new Date().getFullYear() - annee
  }
  render(){
    const nom = "Rami"
    const prenom = "Ahmed"
    const dateNaissance = "2000-01-01"
    return (
      <div>
        <p>
          Nom : {nom} - Prenom : {prenom} -
          Age : {this.getAge(dateNaissance)}
        </p>
      </div>
    )
  }
}
root.render(<App/>)`,

  propsFonction: `// src/components/Presentation.js
import React from 'react'
export default function Presentation(props){
  console.log(props)
  return (
    <div >
      <h2>Salut {props.nom} {props.prenom}</h2>
      <hr/>
    </div>
  )
}

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Presentation from './components/Presentation';
const element=document.getElementById("root")
const root=ReactDOM.createRoot(element)
function App(){
  return(
    <div>
      <Presentation nom="Rami" prenom="Ahmed"/>
      <Presentation nom="Kamali" prenom="Ali" />
      <Presentation nom="Fahmi" prenom="Khalid"/>
    </div>
  )
}
root.render(<App/>)

// Passage d'un objet dans props
function App(){
  let personne1={nom:"Rami",prenom:"Ahmed"}
  let personne2={nom:"Kamali",prenom:"Ali"}
  let personne3={nom:"Fahmi",prenom:"Khalid"}
  return(
    <div>
      <Presentation personne={personne1}/>
      <Presentation personne={personne2} />
      <Presentation personne={personne3} />
    </div>
  )
}

export default function Presentation(props){
  console.log(props)
  const {nom,prenom}=props.personne
  return (
    <div >
      <h2>Salut {nom} {prenom}</h2>
      <hr/>
    </div>
  )
}`,

  propsClasse: `// src/components/Salutation.js
import React from 'react'
export default class Salutation extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div >
        <h2>Salut {this.props.nom} {this.props.prenom}</h2>
        <hr/>
      </div>)
  }}

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Salutation from './components/Salutation';
const element=document.getElementById("root")
const root=ReactDOM.createRoot(element)
function App(){
  return(
    <div>
      <Salutation nom="Rami" prenom="Ahmed" />
      <Salutation nom="Kamali" prenom="Ali" />
      <Salutation nom="fahmi" prenom="Khalid" />
    </div>
  )
}
root.render(<App/>)

// Passage d'un objet et d'un Array
<Salutation personne={personne1} diplomes={diplomes} />`,

  children: `// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Presentation from "./components/Presentation";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
function App() {
  return (
    <div>
      <Presentation nom="Rami" prenom="Ahmed">
        <p>ce ci est un children props</p>
      </Presentation>
      <Presentation nom="Kamali" prenom="Ali">
        <button>quitter</button>
      </Presentation>
    </div>
  );
}
root.render(<App />);

// src/components/Presentation.js
import React from 'react'
export default function Presentation(props){
  console.log(props)
  return (
    <div >
      <h2>Salut {props.nom} {props.prenom}</h2>
      {props.children}
      <hr/>
    </div>
  )
}`,

  stateClasse: `import React from 'react'
export default class Message extends React.Component{
  constructor(){
    super()
    this.state={message:"Bien venu visiteur",btnMessage:"inscription"}
  }
  inscription(){
    this.setState({message:"votre inscription est effectuée",btnMessage:"merci"})
  }
  render(){
    return(<div>
      <h2>{this.state.message}</h2>
      <button onClick={()=>this.inscription()} >{this.state.btnMessage}</button>
    </div>)
  }
}

// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./components/Message";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
function App() {
  return (
    <div>
      <Message/>
    </div>
  );
}
root.render(<App />);`,

  /* ---------- Partie 3 : evenements, cycle de vie, styles ---------- */

  evenements: `// onClick
<button onClick={ajouter}>Ajouter article</button>
<button onClick={() => ajouter()}>Ajouter article</button>

// onSubmit
import React from 'react'
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// onChange
<input type="text" onChange={changeNom}></input>`,

  inscriptionSolution: `import React, { useState } from "react";
export default function Inscription(){
  const [nom,setNom]=useState()
  const [prenom,setPrenom]=useState()
  const [information,setInformation]=useState()
  function envoyer(){
    setInformation(\`nom:\${nom} prenom:\${prenom}\`)
  }
  return(
    <div>
      <h2></h2>
      <div>
        <label>Nom:</label><input type="text" onChange={(e)=>{setNom(e.target.value.toUpperCase())}}/>
      </div>
      <div>
        <label>Prenom:</label><input type="text" onChange={(e)=>{setPrenom(e.target.value.toUpperCase())}}/>
      </div>
      <button onClick={envoyer}>Afficher</button>
      <p>{information}</p>
    </div>
  )
}`,

  validatorFonction: `import React, { useState } from 'react'
export default function Validator(){
  const [password,setPassword]=useState('')
  return(
    <div>
      <div>
        <label>Entrer votre password:</label>
        <input type="password"
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
        />
      </div>
      {password.length<4?"Password doit avoir au moins t 4 caractères":""}
    </div>
  )
}`,

  validatorClasse: `import React, { useState } from 'react'
export default class Validator extends React.Component{
  constructor (){
    super();
    this.state={password:''}
  }
  render(){
    return(
      <div>
        <div>
          <label>Entrer votre password:</label>
          <input type="password"
            value={this.state.password}
            onChange={(event)=>
              this.setState({password:event.target.value})}
          />
        </div>
        {this.state.password.length<4?"Password doit avoir au moins t 4 caractères":""}
      </div>
    )
  }
}`,

  communicationApp: `import React, { useState } from 'react'
import ChercheBar from './components/ChercheBar';
import ResultatList from './components/ResultatList';
const list=[
  {nom:"banane",type:"fruit"},
  {nom:"orange",type:"fruit"},
  {nom:"pomme",type:"fruit"},
  {nom:"raisins",type:"fruit"},
  {nom:"kiwi",type:"fruit"},
  {nom:"tomate",type:"legume"},
  {nom:"carotte",type:"legume"},
  {nom:"pomme de terre",type:"legume"},
  {nom:"navet",type:"legume"},
  {nom:"poivron",type:"legume"}
]
export default function App() {
  const [type,setType]=useState('')
  const [resultas,setResultas]=useState([])
  function onChercheSubmitApp(type){
    setType(type)
    setResultas(list.filter((item)=>item.type.toUpperCase()==type))
  }
  return (
    <div className='App'>
      <h1>Composant App</h1>
      <ChercheBar onChercheSubmit={onChercheSubmitApp}/>
      <div>
        <p>le type:<span style={{color:"rgb(36, 44,33)",fontWeight:"bold"}}>{type}</span></p>
      </div>
      <ResultatList resultats={resultas}/>
    </div>
  );
}`,

  communicationChercheBar: `import React, { useState } from "react";
export default function ChercheBar(props) {
  const [term,setTerm]=useState('')
  function onChercheSubmitBar(event){
    event.preventDefault()
    props.onChercheSubmit(term)
  }
  return (
    <div className="Child">
      <form onSubmit={(event)=>onChercheSubmitBar(event)}>
        <h2>composant ChercheBar</h2>
        <div>
          <label>Entrer le mot clé de recherche:</label>
          <input type="text" value={term}
            onChange={(event)=>setTerm(event.target.value.toUpperCase())}
          />
        </div>
        <button type="submit">chercher</button>
      </form>
    </div>
  );
}`,

  communicationResultatList: `import React from "react";
export default function ResultatList(props) {
  return (
    <div className="Child">
      <h1>composant ResultatList</h1>
      {props.resultats.length == 0 ? (
        <p>pas de resultats</p>
      ) : (
        <div className="list">
          <ul>
            {props.resultats.map((item) => {
              return <li key={item.nom}>{item.nom}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}`,

  cycleVieClasse: `import React from 'react'
export default class Compteur extends React.Component{
  constructor(props) {
    console.log("constructeur")
    super(props)
    this.state = {
      compteur:0
    }
    this.incrementer=()=>{this.setState({compteur:this.state.compteur+1})}
    this.decrementer=()=>{this.setState({compteur:this.state.compteur-1})}
  }
  componentDidMount(){
    //cette methode est executé aprés render
    console.log("Component Did mount")
    console.log('--------------------')
  }
  componentDidUpdate(){
    //cette methode est executé aprés mise à jour par setState
    console.log("Component Did update")
    console.log('--------------------')
  }
  componentWillUnmount(){
    console.log("Component est demonté")
  }
  render(){
    console.log('Render')
    return(
      <div style={{background:"yellow"}} >
        <h3>composant Compteur</h3>
        <p>compteur:{this.state.compteur}</p>
        <button onClick={this.incrementer}>Incrementer</button>
        <button onClick={this.decrementer}>Decrementer</button>
      </div>
    )
  }
}`,

  cycleVieApp: `import React from 'react'
import Compteur from './Compteur'
export default class AppCompteur extends React.Component{
  constructor(props) {
    super(props)
    this.state={isMonter:true}
    this.monter=()=>{this.setState({isMonter:true})}
    this.demonter=()=>{this.setState({isMonter:false})}
  }
  render(){
    return(
      <div >
        <button onClick={this.monter}
          disabled={this.state.isMonter}>Monter</button>
        <button onClick={this.demonter}
          disabled={!this.state.isMonter}>Demonter</button>
        { this.state.isMonter? <Compteur/>:null}
      </div>
    )
  }
}`,

  stylesInline: `function Button() {
  return (
    <button style={{color:"#fff", borderColor:"#5C5CFF", padding:"10px",
      backgroundColor:"#5C5CFF" }}>Nom du bouton</button>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Button />
);`,

  stylesCss: `// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Button() {
  return (
    <button className='buttonStyle'>Nom du bouton</button>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Button />
);

/* index.css */
.buttonStyle {
  color: #fff;
  border-color: #5C5CFF;
  padding:10px;
  background-color:#5C5CFF;
}`,

  affichageConditionnel: `// Connecte.js
function Connecte() {
  return (
    <h1>Bienvenue !</h1>
  );
}
export default Connecte;

// Anonymous.js
function Anonymous() {
  return (
    <h1>Veuillez vous inscrire.</h1>
  );
}
export default Anonymous;

// App.js
import Anonymous from './Anonymous';
import Connecte from './Connecte';
function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Connecte />;
  }
  return <Anonymous />;
}
export default App;

// index.js
root.render(
  <React.StrictMode>
    <App isLoggedIn={false} />
  </React.StrictMode>
);`,

  listesCles: `const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ul>{listItems}</ul>
);

// Les cles
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

// Le plus souvent on utilise l'ID de notre donnee comme cle
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)`,

  /* ---------- Partie 3 : formulaires et API ---------- */

  nameFormFonction: `import { useState } from "react";
const NameForm = () => {
  const [nom, setNom] = useState('');
  const handleChange =(event)=>{
    setNom(event.target.value);
  }
  const handleSubmit =(event)=>{
    alert('Le nom a été soumis : ' + nom);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" name="nom" value={nom} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
export default NameForm;`,

  nameFormClasse: `import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nom: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({nom: event.target.value});
  }
  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.nom);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
export default NameForm;`,

  textareaFonction: `import { useState } from "react";
const FTextArea = (props) => {
  const [message, setMessage] = useState(props.value);
  const handlerChange=(event)=>{
    setMessage(event.target.value);
  }
  const handlerFocus=()=>{
    setMessage("");
  }
  return (
    <textarea cols={props.cols}
      rows={props.rows}
      value={message}
      onFocus={handlerFocus.bind(this)}
      onChange={handlerChange.bind(this)} />
  );
};
export default FTextArea;

// Utilisation
<TextArea cols={40} rows={10} value="Tapez votre texte ici" />`,

  textareaClasse: `import React from 'react';
class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message : props.value };
  }
  handlerChange(event) {
    this.setState({message : event.target.value});
  }
  handlerFocus(event) {
    this.setState({message : ""});
  }
  render() {
    return (
      <textarea cols={this.props.cols}
        rows={this.props.rows}
        value={this.state.message}
        onFocus={this.handlerFocus.bind(this)}
        onChange={this.handlerChange.bind(this)} />
    )
  }
}
export default TextArea;`,

  selectFonction: `const Select = (props) => {
  const handlerChange=(event)=>{
    console.log('key='+event.target.value);
  }
  return (
    <select onChange={handlerChange.bind(this)}>
      {props.options.map(function(option, index) {
        return <option key={index+1} value={index+1}>{option}</option>
      })
      }
    </select>
  );
};
export default Select;`,

  selectClasse: `import React from 'react';
class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  handlerChange(event) {
    console.log('key='+event.target.value);
  }
  render() {
    return (
      <select onChange={this.handlerChange.bind(this)}>
        {this.props.options.map(function(option, index) {
          return <option key={index+1} value={index+1}>{option}</option>
        })
        }
      </select>
    )
  }
}
export default Select;

// Utilisation
<Select options={["Element1", "Element2", "Element3", "Element4", "Element5"]} />
<Select defaultValue={4} />`,

  radioFonction: `const FRadioGroup = (props) => {
  return (
    <div> {
      props.radios.map((radio, index) => {
        return (
          <label key={index+1}><span>{radio.text}</span>
            <input type="radio" value={radio.value}
              name="radioname" />
          </label>
        )
      }) }
    </div>
  );
};
export default FRadioGroup;`,

  radioClasse: `import React from 'react';
class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div> {
        this.props.radios.map((radio, index) => {
          return (
            <label key={index}><span>{radio.text}</span>
              <input type="radio" value={radio.value} name={radio.name}
                checked={radio.checked} />
            </label>
          )
        }) }
      </div>
    )
  }
}
export default RadioGroup;

// Utilisation
var radios = [
  { value : 1, text : "radio1" },
  { value : 2, text : "radio2" },
  { value : 3, text : "radio3", checked : true },
  { value : 4, text : "radio4" }
];
root.render(<RadioGroup radios={radios} name="group1" />);`,

  checkbox: `import React from "react";
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked : props.checked || false };
  }
  handlerChange(event) {
    this.setState({checked : event.target.checked});
  }
  render() {
    return (
      <label>
        <span>{this.props.text}</span>
        <input type="checkbox" value={this.props.value}
          checked={this.state.checked}
          onChange={this.handlerChange.bind(this)} />
        <br/>
      </label>
    )
  }
}

class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{
        this.props.checkboxes.map((checkbox, index) => {
          return (
            <CheckBox key={index} text={checkbox.text} value={checkbox.value}
              checked={checkbox.checked}
            />
          )
        })
      }</div>
    )
  }
}
export default CheckBoxGroup;

// Utilisation
var checkboxes = [
  { value : 1, text : "check1" },
  { value : 2, text : "check2", checked : true },
  { value : 3, text : "check3", checked : true },
  { value : 4, text : "check4" }
];
root.render(<CheckBoxGroup checkboxes={checkboxes} />);`,

  ajaxFetch: `fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response)=>{ console.log(response); return response.json() })
  .then((todos)=>{ console.log(todos) })`,

  ajaxAxios: `import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/users').then(
  (res)=>{ console.log(res)}
)

axios.get('https://jsonplaceholder.typicode.com/users').then(
  (res)=>{ console.log(res.data)}
)`,

  axiosFonctionnel: `import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App(){
  const [utilisateurs,setUtilisateurs]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{ console.log(res.data);setUtilisateurs(res.data)})
  },[])
  return(
    <div>
      <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
      <div>
        {utilisateurs.map(user=>{
          return(
            <div className='child' key={user.id}>
              <h3 style={{color:"rgb(92, 62, 3)"}}>nom: {user.name} {user.username}</h3>
              <p>email:{user.email}</p>
              <p> ville:{user.address.city} rue:{user.address.street} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* Style du PDF
.child{
  background-color:rgb(158, 227, 133);
  width:40%;
  margin:4px auto;
  padding:10px;
  border: 1px solid rgb(70, 88, 64);
  border-radius: 4px;
  box-shadow:8px rgb(210, 217, 208);
}
*/`,

  axiosFonctionnelAsync: `useEffect(()=>{
  const getData=async ()=>{
    const users= await axios.get('https://jsonplaceholder.typicode.com/users')
    setUtilisateurs(users.data)
  }
  getData()
},[])`,

  fetchFonctionnel: `fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{ console.log(response); return response.json()})
  .then((users)=>{console.log(users);setUtilisateurs(users)})

// async await
const [utilisateurs,setUtilisateurs]=useState([])
useEffect(()=>{
  const getData=async (rep)=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await response.json()
    setUtilisateurs(users)
  }
  getData()
},[])`,

  axiosClasse: `import React from "react";
import axios from 'axios'
export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      utilisateurs:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{this.setState({utilisateurs:res.data})})
  }
  render(){
    return(
      <div>
        <h3>liste utilisateurs</h3>
        <div>
          <h1>nombre d'utilisateurs: {this.state.utilisateurs.length}</h1>
          {this.state.utilisateurs.map(user=>{
            return(
              <div className='child' key={user.id}>
                <h3 style={{color:"rgb(92, 62, 3)"}}>nom: {user.name} {user.username}</h3>
                <p>email:{user.email}</p>
                <p> ville:{user.address.city} rue:{user.address.street} </p>
              </div>
            )
          })}</div>
      </div>
    )
  }
}`,
};
