import { forwardRef } from 'react'

export const FormField = forwardRef(function FormField(props, ref) {
  return (
    <div className="row">
      <label htmlFor={props.id} className="form-label text-center text-light">{props.label}</label>
      <input
        ref={ref}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        className="form-control" />
    </div>
  )
})
