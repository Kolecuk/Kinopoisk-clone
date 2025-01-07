export function FilmText(props) {
  return (
    <p>
      <strong>{props.children}</strong> {props.text}
    </p>
  )
}