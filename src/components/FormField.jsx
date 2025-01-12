import { forwardRef } from 'react'
import '../styles/search.scss'

export const FormField = forwardRef(function FormField(props, ref) {
  const renderError = (error) => {
    if (error) return <p className="text-danger w-50 ms-auto">{error}</p>
  }

  return (
    <>
      <div className={props.classWrapper}>
        <label htmlFor={props.id} className={props.classLabel}>{props.label}</label>
        <input
          ref={ref}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          id={props.id}
          className={props.classInput}
          {...props.children}
        />
      </div>
      {renderError(props.error)}
    </>
  )
})