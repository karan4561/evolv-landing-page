import React,{ReactNode} from 'react'

interface Props {
    children?: ReactNode
}

const SlideCard = ({children}:Props) => {
  return (
    <div className='card'>
        <div className='card-gradient'>{children}</div>
    </div>
  )
}

export default SlideCard