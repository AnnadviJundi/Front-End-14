import React from 'react'
import AddMovie from '../Components/AddMovie/AddMovie'

const Add = (props) => {
    const {item,setItem} = props

    return (
    <div>
    <AddMovie movies={item} setMovies={setItem}/> 
    </div>
  )
}

export default Add