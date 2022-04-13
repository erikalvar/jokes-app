export default function Joke(props) {
  return (
    <>
      {/* {props.setup && <h3>Setup: {props.setup}</h3>} */}
      <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
      {/* <p>Setup: {props.setup}</p> */}
      <p>Punchlike: {props.punchline}</p>
      <hr/>
    </>
  )
}