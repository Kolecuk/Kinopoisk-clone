import { Image } from './Image'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import filter from '../assets/filter.svg'
import isFavorite from '../assets/isFavorite.svg'
import isNotFavorite from '../assets/isNotFavorite.svg'

export function IconButton(props) {
  const chooseButton = (icon) => {
    switch (icon) {
      case 'logo':
        return renderButton(logo, 'logo button')
      case 'search':
        return renderButton(search, 'search button')
      case 'filter':
        return renderButton(filter, 'filter button')
      case 'isFavorite':
        return renderButton(isFavorite, 'favorite button', props.handleClick)
      case 'isNotFavorite':
        return renderButton(isNotFavorite, 'favorite button', props.handleClick)
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
