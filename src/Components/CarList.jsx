import React from 'react'

export const CardList = ({item}) => {
  return (
    <div>{item.name}
    {item.delivery}
    </div>
  )
}
