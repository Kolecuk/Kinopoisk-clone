import '../styles/wrapper.scss'

export function Container(props) {
  return (
    <div className="wrapper d-flex flex-column bg-light container">
      {props.children}
    </div>
  )
}