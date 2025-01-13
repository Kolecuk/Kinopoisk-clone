export function FormFieldSelect(props) {

  const renderOption = (obj) => {
    const array = Object.entries(obj)
    return (
      array.map(item => <option value={item[0]} key={item[0]}>{item[1]}</option>)
    )
  }

  return (
    <div className={props.classWrapper}>

      <label htmlFor={props.id} className={props.classLabel}>{props.label}</label>
      <select {...props.children} id={props.id} className={props.classSelect}>
        {renderOption(props.option)}
      </select>
    </div>
  )
}
