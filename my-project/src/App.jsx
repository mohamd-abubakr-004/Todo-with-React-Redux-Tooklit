import React from 'react'
import AddItem from './Components/addItem'
import ListItems from './Components/ListItems'

function App() {

  return (
    <div className=' bg-slate-900 h-[100vh]'>
      <h1 className='text-center text-5xl text-white pt-2'>Learn about redux toolkit</h1>
      <AddItem/>
      <ListItems/>
    </div>
  )
}

export default App
