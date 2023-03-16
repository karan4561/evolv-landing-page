import React,{ReactNode} from 'react'

interface Props {
    children?: ReactNode
}

const SlideCard = ({children}:Props) => {
  return (
    <div className='slide2'>
        <div className='slide2-gradient'>{children}</div>
    </div>
  )
}

export default SlideCard