import React,{ReactNode} from 'react'

interface Props {
    children?: ReactNode
}

const SlideCard = ({children}:Props) => {
  return (
    <div className='card2'>
        <div className='card2-gradient'>{children}</div>
    </div>
  )
}

export default SlideCard