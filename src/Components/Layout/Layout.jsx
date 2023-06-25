import React from 'react'

const Layout = ({children, color}) => {
  return (
    <div className={`${color}  flex flex-col items-center mt-20 `}>
        {children}
    </div>
  )
}

export default Layout