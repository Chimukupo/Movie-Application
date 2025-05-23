import { useState, useEffect } from 'react'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  });
  
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked!' : 'Like'}      
      </button>
    </div>
  )
}

const App = () => {  
  return (
    <div className="card-container">
      <Card title="Superman" rating={5} isCool={true} />
      <Card title="Fantastics Four: First Steps" />
      <Card title="F1" />
      <Card title="Sinners" />
      <Card title="Ballerina" />
    </div>
  )
}

export default App
