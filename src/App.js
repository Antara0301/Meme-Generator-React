import React, {Component} from 'react';
//import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
//import styled from 'styled-components';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';  // P should be uppercase always 
//import { render } from '@testing-library/react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//import { render } from '@testing-library/react';
// Assigment 2
/*
class App extends Component {
  state ={

    userInput: ''
  }

  iputChangeHandler=(event) => {
    this.setState({userInput: event.target.value});

  }
 deleteCharHandler =(index) =>{
  const text = this.state.userInput.split('');

  text.splice(index,1);
  const updatedText= text.join('');
  this.setState({userInput: updatedText});
 }


 render(){

  let charList =this.state.userInput.split('').map((ch,index) =>{
   return <Char character= {ch} key ={index}
   clicked={() => this.deleteCharHandler(index)} />

  });

  return (
    <div className='App'>
      <br></br>
      <br></br>
      <input type="text" onChange= {this.iputChangeHandler}
      value={this.state.userInput}/>
      <p>{this.state.userInput}</p>
      <Validation inputLength= {this.state.userInput.length} />
      {charList}
    </div>
  );
 }

}



class App extends Component {

  state={
   username: 'supermax'

  }
  
  usernameChangeHandler=(event) =>{
   this.setState({
     username: event.target.value
   });

  }

 render(){
   return (
    <div className="App">
     <br></br>
     <UserInput changed={this.usernameChangeHandler}
     currentName={this.state.username}/>
     <UserOutput userName={this.state.username}/>
     <UserOutput userName={this.state.username}/>
     <UserOutput userName="max" />
     </div>
    );
  }
}

*/



/*

const App = props => {
 const [personsState, setPersonState] = useState ({
  persons: [
    { name:"Antara", age:30},
    { name:"Subhadeep",age:35},
    { name:"Aniket", age:28}
   ],
   //otherState: 'some other value'
 });

 const [otherState,setOtherState] = useState('some other state value'); // ypu can add whatever you want noumber,bollen string
 console.log(personsState,otherState);
 const switchNameHandler = () => {
  // console.log("eas clicked");
  setPersonState({
   persons: [
     { name:"Ant", age:30},
     { name:"Subhadeep",age:35},
     { name:"Aniket", age:27}
    ]

  });
 };

 return (
    <div className="App">
     <h1>Hi, I am a React app</h1>
     <p>This is a react</p>
     <button onClick={switchNameHandler}>Switch Name</button>

     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
     <Person name ={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Racing</Person> 
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
 }
 

 const StyledButton = styled.button`
 
 background-color:${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
 `;
*/


class App extends Component {
 
  state={
     persons: [
      { id: "abc", name:"Antara", age:30},
      { id: "def", name:"Subhadeep",age:35},
      { id: "ghi", name:"Aniket", age:28}
     ],
     otherState: 'some other value',
     showPerson: false

  }
  
  nameChangeHandler = (event,id) => {

   const personIndex = this.state.persons.findIndex(p =>{

    return p.id === id;
   });

   const person ={

    ...this.state.persons[personIndex]
   };
    
   person.name= event.target.value;

   const persons =[...this.state.persons];
   persons[personIndex] = person;

    this.setState({persons: persons})
  }

   deletePersonHandler =(personIndex) => {
     //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons: persons});

   }

  togglePersonHandler =() => {
   const doesShow= this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }


render(){
  /*
 const style={
  backgroundColor:"green",
  color: 'white',
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  cursor: 'pointer',
  ':hover':{
    backgroundColor:'lightgreen',
    color: 'black'
  }
  
 };
 */
 let persons=null;

 if(this.state.showPerson === true ){

  persons = (

       <div>
         {this.state.persons.map((person,index) => {
           return <Person 
           click={this.deletePersonHandler.bind(this,index)}
           name={person.name}
            age={person.age} 
            key={person.id}
            change={(event) =>this.nameChangeHandler(event,person.id)} />
         })}
       
    </div> 
  );
  /*
  style.backgroundColor= "red";
  style[':hover']= {
    backgroundColor:'salmon',
    color: 'black'
  };
  */
 }

 let classes =[];

 if(this.state.persons.length <=2){
   classes.push('red'); // classes =[red]
 }

if(this.state.persons.length <=1) {
  classes.push('bold'); //classes= [red,bold]
}







  return (
    //<StyleRoot>
    <div className="App">
     <h1>Hi, I am a React app</h1>
     <p className={classes.join(' ')}>This is a react</p>
     < button //alt={this.state.showPerson}
     //style={style}
     onClick={ this.togglePersonHandler}>Switch Name
     </button>

     {persons}
       
        
    </div>
    //</StyleRoot>
  );
   } //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does it woked?'));
  };
      
  export default App ;

    //export default Radium(App);
/*
<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} 
       click = {this.switchNameHandler. bind(this,'subho')}
       change= {this.nameChangeHandler}> My hobbies: Racing</Person> 
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} 

       switchNameHandler = (newName) => {
   // console.log("eas clicked");
   this.setState({
    persons: [
      { name: newName, age:30},
      { name:"Subhadeep",age:35},
      { name:"Aniket", age:27}
     ]

   })
  }


nameChangeHandler = (event,id) => {
    this.setState({
      persons: [
        { name: "ant", age:30},
        { name:event.target.value,age:35},
        { name:"Aniket", age:27}
       ]
  
     })
       */