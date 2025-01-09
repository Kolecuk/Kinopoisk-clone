import { forwardRef } from 'react'
import '../styles/search.scss'

export const FormField = forwardRef(function FormField(props, ref) {
  return (
    <div className="row">
      <label htmlFor={props.id} className="form-label text-center text-light visually-hidden">{props.label}</label>
      <input
        ref={ref}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        className="form-control search__input" />
    </div>
  )
})
