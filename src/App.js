import './style.css';
import Joke from "./Joke"

function App() {
  return (
    <div className="App">
      <Joke 
        setup="Why did the chicken cross the road?"
        punchline="To get to the other side."
      />
      <Joke 
        setup="Why are they called seagulls?"
        punchline="bc if they flew over the bay they'd be called baygulls."
      />
      <Joke 
        setup="What the difference between a banjo layer and a large pizz?"
        punchline="A large pizza can feed a family of 4."
      />
      <Joke 
        setup="How do you tell if the stage is level?"
        punchline="The drool is coming out both sides of the banjo players mouth."
      />
    </div>
  );
}

export default App;
