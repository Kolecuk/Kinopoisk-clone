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
        return renderButton(filter, 'filter button', props.handleClick)
    }
  }

  const renderButton = (srcPath, altInfo, handleClick) => {
    return <button type={props.type} className={props.className} onClick={handleClick}>
      <Image src={srcPath} alt={altInfo} />
    </button>
  }

  return (
    <>
      {chooseButton(props.icon)}
    </>
  )
}
