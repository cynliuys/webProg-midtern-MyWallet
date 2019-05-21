import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
                <button onClick={cc}>hi</button>
        </div>
    );
}

function cc(){
    console.log("cc has been called!")
    fetch("http://localhost:3001/users/1",{method: "GET"})
    .then((res)=>console.log(res.text()))
    .catch((err) => console.log('Error :', err));

}


export default App;
