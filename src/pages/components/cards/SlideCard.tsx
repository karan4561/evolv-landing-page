import React,{ReactNode} from 'react'

interface Props {
    children?: ReactNode
}

const SlideCard = ({children}:Props) => {
  return (
    <div className='slide'>
        <div className='slide-gradient'>{children}</div>
    </div>
  )
}

export default SlideCard