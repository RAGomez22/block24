import { useState } from 'react'
import './App.css'
import './index.css'
//imports data from data.js under the const of puppyList
import { puppyList } from './data.js'

function App() {

  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);

  //featPupId stores the data of the featured pup when clicked
  const [featPupId, setFeatPupId] = useState(null);
  console.log(featPupId);
  console.log("puppyList: ", puppyList)

//featuredPup is a state variable that changes when puppy id is clicked and registered via
//on click feature
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)


  //React needs a key to maintain the integrity of the order of elements. 
  //And, the key should be a unique identifier that comes directly from your data
  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
           })
    
      }
      <div className="featPup">
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

 
  



export default App
