import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className='headings'>Hello world! This is Ali Hassan Ansari</h1>
        <p>You can contact with me by whatsApp. My number is 0344-3026626</p> 

        <h2 className='headings'>The prerequisite for this bootcamp is:</h2>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA SCRIPT</li>
        </ol>    

        <h2 className='headings'>But if you know these skill it should be plus</h2>
        <ul>
          <li>GIT</li>
          <li>DEVOPS</li>
        </ul>

        <p>The number you see below is written in JSX expression</p>{10+50}
    </div>
  );
}

export default App;