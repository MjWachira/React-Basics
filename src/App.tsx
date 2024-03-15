import './App.css';
import { Container } from './Components/Container';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Input } from './Components/Inputs';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Button } from './Components/button';
import { LoggedIn } from './Components/state/LoggedIn';
import { User } from './Components/state/User';

function App() {
const personName = {
  first:'Bruce',
  last: 'Wayne'
}
const nameList=[
  {
    first:'Bruce',
    last: 'Wayne'
  },
  {
    first:'Clark',
    last: 'Kent'
  },
  {
    first:'Princess',
    last: 'Diana'
  }
]

  return (
    <div className="App">
      <Greet name ="Johnny" messageCount={10} isLoggedIn = {true}/>
      <Person name ={personName}/>
      <PersonList names = {nameList}/>
      <Status status='success'/>
      <Heading>Placeholder Text </Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id)=>{
          console.log('Button Clicked',event,id)
      }}/>
      <Input value='' handleChange={(event)=>(console.log(event))} />
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>
      <LoggedIn/>
      <User/>
    </div>
  );
}

export default App;
