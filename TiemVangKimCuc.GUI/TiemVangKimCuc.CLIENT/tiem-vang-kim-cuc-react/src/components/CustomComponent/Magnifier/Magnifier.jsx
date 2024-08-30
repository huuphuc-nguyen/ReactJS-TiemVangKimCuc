
import {useState, useEffect} from 'react'

const Magnifier = ({imgUrl}) => {

    const [showMagnifier, setShowMagnifier] = useState(false)
    // position is used to set background position of magnifier
    const [position, setPosition] = useState({x: 0, y: 0})
    // used to set position of magnifier relatively inside this component
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => {
        // left and top are distance of this component to sides of screen
        const {top, left, width, height} = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setPosition({x, y})
        
        // must subtract left and top to get position relatively to this component
        setCursorPosition({x: e.clientX - left, y: e.clientY - top})
    }

    // Need to set cursor position when mouse enter to get correct position
    // Incase page is loaded and mouse is already inside component, 
    //  if not set cursor position, magnifier will be shown at wrong position
    const handleMouseEnter = (e) => {
        const {top, left} = e.target.getBoundingClientRect();
        setCursorPosition({x: e.clientX - left, y: e.clientY - top})
    
        setShowMagnifier(true)
    }   

    const handleTouchMove = (e) => {
      const {top, left } = e.target.getBoundingClientRect();
      const touch = e.touches[0]
      
      // must subtract left and top to get position relatively to this component
      setCursorPosition({x: touch.clientX - left, y: touch.clientY - top})
    }

    const handleTouch = (e) => {
      const {top, left} = e.target.getBoundingClientRect();
      const touch = e.touches[0]
      setCursorPosition({x: touch.clientX - left, y: touch.clientY - top})
  
      setShowMagnifier(true)
  }

  return (
    <div 
        className='w-full h-full relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={()=>setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouch}
    >

      <img 
        src={imgUrl}
        className=' h-full w-full rounded-xl'
      />

        {/* Magnifier */}
      <div 
        // Set position and effect for magnifier
        style={{
            transform: showMagnifier ? 'scale(1)' : 'scale(0)',
            opacity: showMagnifier ? 1 : 0,
            position: 'absolute',
            left: `${cursorPosition.x - 90}px`,
            top: `${cursorPosition.y - 90}px`,
            pointerEvents: 'none',
            zIndex: 1000,
            transition: 'opacity 0.2s ease-in-out',
        }}>
            {/* Magnifier background and style */}
          <div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
                backgroundRepeat: 'no-repeat',
                // backgroundSize is set to 250% to make image bigger
                backgroundSize: '250%'
            }}
            className='h-[180px] w-[180px] border-2 rounded-full border-primary'>
          </div>
      </div>

    </div>
  )
}

export default Magnifier
