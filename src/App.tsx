
import { useState } from 'react';
import './App.css'
import Convert from './components/convert/convert.container.component'
import FavListContainer from './components/fav-list/fav-list.container.component'
import Header from './components/header/header.component'

function App() {

  const [favList,setFavList] = useState<string[]>([]);

  const handleFavList = (favList: string[]): void => {
    console.log('favList desde app'+favList)
    setFavList(favList);
  }

  return (
    <body>
      <Header/>
      <main>
        <div className='container'>
          <Convert favList={favList} setFavList={handleFavList}/>
        </div>
        <div className='container'>
          <FavListContainer favList={favList}/>
        </div>
      </main>
    </body>
  )
}

export default App
