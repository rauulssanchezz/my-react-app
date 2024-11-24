
import { useState } from 'react';
import './App.css'
import Convert from './components/convert/convert.container.component'
import FavListContainer from './components/fav-list/fav-list.container.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component';

function App() {

  const [favList,setFavList] = useState<string[]>(JSON.parse(localStorage.getItem('favList')|| '[]'));

  const handleFavList = (favList: string[]): void => {
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
          <FavListContainer favList={favList} setFavList={setFavList}/>
        </div>
      </main>
      <Footer/>
    </body>
  )
}

export default App
