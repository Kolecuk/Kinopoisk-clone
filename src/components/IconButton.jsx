import { Image } from './Image'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import filter from '../assets/filter.svg'

export function IconButton(props) {
  const chooseButton = (icon) => {
    switch (icon) {
      case 'logo':
        return renderButton(logo, 'logo button')
      case 'search':
        return renderButton(search, 'search button', props.handleClick)
      case 'filter':
        return renderButton(filter, 'filter button')
    }
  }

  const renderButton = (srcPath, altInfo, handleClick) => {
    return (
      <button
        type={props.type}
        className={props.className}
        onClick={handleClick}
        data-bs-dismiss={props.dataBsDismiss}
        data-bs-toggle={props.dataBsToggle}
        data-bs-target={props.dataBsTarget}
        aria-controls={props.ariaControls}
      >
        <Image src={srcPath} alt={altInfo} />
      </button>
    )
  }

  return (
    <>
      {chooseButton(props.icon)}
    </>
  )
}
