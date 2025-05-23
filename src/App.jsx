import { useState } from 'react'

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {  
  // const [ variableName, setVariable ] = useState();
  const [hasLiked, setHasLiked] = useState(initialState:false);

  return (
    <div className="card-container">
      <Card title="Superman" ratings={5} isCool={true} />
      <Card title="Fantastics Four: First Steps" />
      <Card title="F1" />
      <Card title="Sinners" />
      <Card title="Ballerina" />
    </div>
    
  )
}

export default App
