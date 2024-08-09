import HeaderContact from './HeaderContact'
import HeaderBody from './HeaderBody'
import HeaderNav from './HeaderNav'

const Header = () => {

  return (
    <header className='w-full mt-2 transition-all duration-300 lg:px-24 px-[2rem]'>
        {/* hidden in small resolution */}
        <HeaderContact/>

        <HeaderBody/>

        {/* hidden in small resolution */}
        <HeaderNav/>
    </header>
  )
}

export default Header
