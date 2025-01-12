export function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick} className={props.className} data-bs-dismiss={props.dataBsDismiss}>
      {props.text}
    </button>
  )
}