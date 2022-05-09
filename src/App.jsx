import React from 'react'
import ReactDOM from 'react-dom/client'
import Students from './components/Students'


class App extends React.Component{
  render(){
    return (
      <div>
        <Students />
      </div>
    )
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)