
import './App.css'
import Convert from './components/convert/convert-container/convert.container.component'
import Header from './components/header/header.component'

function App() {

  return (
    <body>
      <Header/>
      <main>
        <div className='container'>
          <Convert/>
        </div>
        <div className='container'>

        </div>
      </main>
    </body>
  )
}

export default App
