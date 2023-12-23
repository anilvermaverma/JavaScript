import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
function Ex(){
 return(
  <>
 
  <h1 className='bg-green-800 text-center'>Helllo vinod </h1>
  <p>Paragraph</p>
  </>
 )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Ex/>


  </React.StrictMode>,
)
