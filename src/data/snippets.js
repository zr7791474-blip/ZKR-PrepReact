/**
 * Extraits de code originaux du PDF (pages 220 a 322), completes par les
 * extraits des pages 16 a 219 dans snippets-pre.js.
 */
import { snippetsPre } from "./snippets-pre";

export const snippets = {
  ...snippetsPre,
  fetchClasse: `componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{ console.log(response); return response.json() })
    .then((users)=>{ this.setState({ utilisateurs: users }) })
}`,

  ex01Solution: `import React, { useEffect, useState } from 'react'

export default function App(){
  const [id, setId] = useState(1)
  const [utilisateur, setUtilisateur] = useState({})
  const [address, setAddress] = useState({})

  function handelChangeId(event){
    setId(event.target.value)
  }

  useEffect(
    ()=>{
      fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
        .then((response)=>{ return response.json() })
        .then((user)=>{ setAddress(user.address); setUtilisateur(user); })
    },[id])

  return(
    <div>
      <h1>Details utilisateur</h1>
      <div>
        <label>donner le id:</label>
        <input type="text" onChange={handelChangeId} value={id}></input>
      </div>
      {utilisateur && address ?
        <div className='child' key={utilisateur.id}>
          <h3 style={{ color: "rgb(92, 62, 3)" }}>
            id:{utilisateur.id} nom: {utilisateur.name} {utilisateur.username}
          </h3>
          <p>email:{utilisateur.email}</p>
          <p>telephone:{utilisateur.phone}</p>
          <p>site web:{utilisateur.website}</p>
          <p>rue : {address.street}</p>
          <p>ville : {address.city}</p>
        </div>
        : "svp choisir un id valide!!!!"}
    </div>
  )
}`,

  ex01Css: `.child{
  background-color: rgb(158, 227, 133);
  width: 40%;
  margin: 4px auto;
  padding: 10px;
  border: 1px solid rgb(70, 88, 64);
  border-radius: 4px;
  box-shadow: 8px rgb(210, 217, 208);
}`,

  autreMessage: `import React, { useState } from "react";

export default function AutreMessage() {
  const [message, setMessage] = useState("Bien venu visiteur");
  const [btnMessage, setBtnMessage] = useState("inscription");

  function inscription() {
    setMessage("votre inscription est effectuée");
    setBtnMessage("merci");
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => inscription()}>{btnMessage}</button>
    </div>
  );
}`,

  compteur: `import React, { useState } from "react";

export default function Compteur(){
  const [valeur, setValeur] = useState(0)

  function incrementer(){ setValeur(valeur + 1) }
  function decrementer(){ setValeur(valeur - 1) }

  return(
    <div>
      <h1>compteur: {valeur}</h1>
      <input type="button" value="incrementer" onClick={incrementer}/>
      <input type="button" value="decrementer" onClick={decrementer}/>
    </div>
  )
}`,

  compteurArrow: `import React, { useState } from "react";

export default function Compteur(){
  const [valeur, setValeur] = useState(0)

  return(
    <div>
      <h1>compteur: {valeur}</h1>
      <input type="button" value="incrementer"
        onClick={()=>{ setValeur(valeur + 1) }}/>
      <input type="button" value="decrementer"
        onClick={()=>{ setValeur(valeur - 1) }}/>
    </div>
  )
}`,

  useeffectCompteur: `import React, { useEffect, useState } from "react";

export default function Compteur(){
  const [valeur, setValeur] = useState(0)

  function incrementer(){ setValeur(valeur + 1) }
  function decrementer(){ setValeur(valeur - 1) }

  useEffect(()=>{ console.log(valeur) })

  return(
    <div>
      <h1>compteur: {valeur}</h1>
      <input type="button" value="incrementer" onClick={incrementer}/>
      <input type="button" value="decrementer" onClick={decrementer}/>
    </div>
  )
}`,

  useeffectSalutation: `import React, { useEffect, useState } from "react";

export default function Salutation(props){
  const [nom, setNom] = useState("Rami")

  function changeNom(e){
    setNom(e.target.value)
  }

  useEffect(()=>{ document.title = nom; },[nom])

  return(
    <div>
      <input type="text" value={nom} onChange={changeNom}></input>
      <h2>Salutation</h2>
      <p>salut {nom} </p>
    </div>
  )
}`,

  ex03Solution: `import React, { useEffect, useState } from "react";

export default function Salutation(props){
  const [nom, setNom] = useState("---")
  const [prenom, setPrenom] = useState("---")
  const [age, setAge] = useState(0)

  function changeNom(e){ setNom(e.target.value) }
  function changePrenom(e){ setPrenom(e.target.value) }
  function changeAge(e){ setAge(e.target.value) }

  useEffect(function(){
    document.title = nom + " " + prenom;
  },[nom, prenom])

  return(
    <div>
      <label>nom:</label>
      <input type="text" value={nom} onChange={changeNom}></input>
      <label>prénom:</label>
      <input type="text" value={prenom} onChange={changePrenom}></input>
      <label>age:</label>
      <input type="text" value={age} onChange={changeAge}></input>
      <h2>Salutation</h2>
      <p>salut {nom} {prenom} vote age est:{age}</p>
    </div>
  )
}`,

  postsFetch: `import React, { useEffect, useState } from "react";

export default function App(){
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(response=>setPosts(response))
  },[])

  return (<div>
    <h1>liste des posts à partir d'un API</h1>
    <ul>
      {posts.map(post=>{
        return (<li key={post.id}>{post.title}</li>)
      })}
    </ul>
  </div>)
}`,

  usePosts: `import React, { useState, useEffect } from "react";

function usePosts(){
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(response=>setPosts(response))
  },[])

  return posts
}

export default usePosts`,

  usePostsApp: `import React, { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

export default function App(){
  const posts=usePosts()
  return (<div>
    <h1>liste des posts à partir d'un API</h1>
    <ul>
      {posts.map(post=>{
        return (<li key={post.id}>{post.title}</li>)
      })}
    </ul>
  </div>)
}`,

  routingExample: `import React, { Component } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div className="main-route-place">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() { return (<div><h2>Home</h2></div>); }
}
class About extends React.Component {
  render() { return (<div><h2>About</h2></div>); }
}
class Blog extends React.Component {
  render() { return (<div><h2>Blog</h2></div>); }
}

export default App;`,

  testsEnzyme: `import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ClickCount: 0,
      IamDisabled: true
    };
    this.ClickMe = this.ClickMe.bind(this);
  }

  ClickMe(){
    this.setState({
      ClickCount: this.state.ClickCount + 1
    });
  }

  render() {
    return (
      <div>
        <button className="click-me" id="ClickMe" onClick={this.ClickMe}>
          Click Me
        </button>
        <p>You clicked me :: {this.state.ClickCount}</p>
        <button className="click-me" disabled={this.state.IamDisabled}>
          Disabled
        </button>
      </div>
    );
  }
}

export default App;`,

  testsEnzymeSpec: `import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For App', () => {
  it('should render button', () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find('#ClickMe');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Click Me');
  });

  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find('#ClickMe');
    buttonElement.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('You clicked me :: 1');
  });
});

describe('Test Case for App Page', () => {
  test('Validate Disabled Button disabled', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('IamDisabled')).toBe(true);
  });
});`,

  immer: `const baseState = [
  { title: "Learn TypeScript", done: true },
  { title: "Try Immer", done: false }
]

// Sans Immer
const nextState = baseState.slice()
nextState[1] = {
  ...nextState[1],
  done: true
}
nextState.push({ title: "Tweet about it" })

// Avec Immer
import produce from "immer"
const nextStateImmer = produce(baseState, draft => {
  draft[1].done = true
  draft.push({ title: "Tweet about it" })
})`,

  atelierTypes: `// types.js
export const ADD_INSCRIPTION = 'ADD_INSCRIPTION'
export const REMOVE_INSCRIPTION = 'REMOVE_INSCRIPTION'
export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'`,

  atelierActions: `// actions.js
import * as types from './types'

export function add_inscription(id, nom, filiere) {
  return {
    type: types.ADD_INSCRIPTION,
    payload: { id: id, nom: nom, filiere: filiere }
  }
}

export function remove_inscription(id) {
  return {
    type: types.REMOVE_INSCRIPTION,
    payload: { id: id }
  }
}

export function add_note(id, module, note) {
  return {
    type: types.ADD_NOTE,
    payload: { id: id, module: module, note: note }
  }
}

export function remove_note(id, module) {
  return {
    type: types.REMOVE_NOTE,
    payload: { id: id, module: module }
  }
}

export function update_note(id, module, note) {
  return {
    type: types.UPDATE_NOTE,
    payload: { id: id, module: module, note: note }
  }
}`,

  atelierReducers: `// inscriptionHistory
function inscriptionHistory(listInscription = [], action) {
  if (action.type === types.ADD_INSCRIPTION) {
    return [...listInscription, action.payload]
  }
  if (action.type === types.REMOVE_INSCRIPTION) {
    return listInscription.filter(insc => insc.id !== action.payload.id)
  }
  return listInscription;
}

// notationHistory
function notationHistory(listNotation = [], action) {
  if (action.type === types.ADD_NOTE) {
    return [...listNotation, action.payload]
  }
  if (action.type === types.REMOVE_NOTE) {
    return listNotation.filter(note =>
      !(note.id === action.payload.id && note.module === action.payload.module)
    )
  }
  if (action.type === types.UPDATE_NOTE) {
    const { id, module, note } = action.payload
    return [
      ...listNotation.filter(note =>
        !(note.id === id && note.module === module)
      ),
      { id, module, note }
    ]
  }
  return listNotation
}

const Etablissment = combineReducers({
  inscriptionHistory: inscriptionHistory,
  notationHistory: notationHistory
});

const store = createStore(Etablissment);
console.log(store.getState());`,

  connect: `// index.js
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./App"
import { Etablissment } from "./reducers"

const store = createStore(Etablissment)

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.querySelector("#root"))

// App.js
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    inscriptionHistory: state.inscriptionHistory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add_Inscription: (id, nom, filiere) => {
      dispatch(add_inscription(id, nom, filiere))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)`,

  thunk: `// fonction thunk fetchPosts
export const fetchPosts = function(){
  return function(dispatch, getState){
    dispatch(fetchPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch(fetchPostsSuccess(response.data)))
      .catch(err => dispatch(fetchPostsFailure(err.message)))
  }
}`,

  thunkStore: `import { applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { legacy_createStore as createStore } from 'redux';
import * as type from './postsType'

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case type.FETCH_POSTS_REQUEST:
      return { loading: true, data: [], error: '' }
    case type.FETCH_POSTS_SUCCESS:
      return { loading: false, data: action.payload.posts, error: '' }
    case type.FETCH_POSTS_FAILURE:
      return { loading: false, data: [], error: action.payload.error }
    default:
      return state
  }
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);`,

  toolkitCounter: `import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer`,

  toolkitStore: `// index.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})`,

  toolkitCrudSlice: `import { createSlice } from '@reduxjs/toolkit'
import { usersData } from './UsersData'

export const userSlice = createSlice({
  name: "users",
  initialState: { value: usersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id != action.payload.id)
    },
    updateNom: (state, action) => {
      state.value = state.value.map(user => {
        if (user.id === action.payload.id) {
          return ({ ...user, nom: action.payload.nom })
        } else {
          return user;
        }
      })
    }
  },
});

export const { addUser, deleteUser, updateNom } = userSlice.actions;
export default userSlice.reducer;`,

  asyncThunk: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// elle genere pending, fulfilled et rejected action types
const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error
    })
  }
})

export { fetchUsers }
export default userSlice.reducer;`,
};
