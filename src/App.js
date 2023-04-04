import './App.css';
import Header from './Component/Header/Header';
import Leftbar from './Component/Leftbar/Leftbar';
import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, Controls } from 'react-flow-renderer';

function Condition({ content }) {
  return (
    <div style={{color:"white", borderBlock:"white", marginRight: "10px"}}>
      {content}
    </div>
  );
}

function App() {
  const [conditions, setConditions] = useState([]);

  const handleAddCondition = () => {
    const newConditionContent = 'Condition Permission, form type and +1';
    setConditions([...conditions, newConditionContent]);
  }

  return (
    <div className="App">
      <Header/>   
      <Leftbar/>  
      <ReactFlowProvider>
        <button style={{color:"black", background:"white"}}>Start</button><br/><br/>
        <div style={{color:"white", borderBlock:"white"}}>Requirement Selection <br/>Permission, form type and +1</div><br/><br/>
        <div style={{color:"white", borderBlock:"white"}}>Questionnaire <br/>Permission, form type and +1</div><br/><br/>
        <button style={{color:"black", background:"Green"}} onClick={handleAddCondition}>Add Condition</button><br/><br/>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft:"300px", marginRight:"300px"}}>
          {conditions.map((content, index) => <Condition key={index} content={content} />)}
        </div>
        <Controls style={{marginLeft:"1450px", marginBottom:"250px"}}/>
      </ReactFlowProvider>
    </div>
  );
}

export default App;