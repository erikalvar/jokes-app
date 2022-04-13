export default function Joke(props) {
  return (
    <>
      <p>{props.setup}</p>
      <button>Why</button>
      <p>{props.punchline}</p>
    </>
  )
}