import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#c9c8c7")

  return (
 <div className='w-full h-screen
  duration-200' style={{backgroundColor : color}}>  
  
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0' >

<div className='flex flex-wrap justify-center rounded-lg p-2' style={{backgroundColor:'white'}}> 
  
<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'red'}} onClick={()=>setColor('red')}> RED</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'blue'}} onClick={()=>setColor('blue')}> BLUE</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'green'}} onClick={()=>setColor('green')}> GREEN</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'yellow'}} onClick={()=>setColor('yellow')}> YELLOW</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'olive'}} onClick={()=>setColor('olive')}> OLIVE</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : 'purple'}} onClick={()=>setColor('purple')}> PURPLE</button>

<button className='p-2 mx-3 rounded-lg shadow-md' style={{backgroundColor : '#c9c8c7'}} onClick={()=>setColor('#c9c8c7')}> DEFAULT</button>
   </div>

  </div>
  
   </div>
  )
}

export default App
