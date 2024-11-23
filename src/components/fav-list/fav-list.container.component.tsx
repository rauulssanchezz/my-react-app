
import FavListCard from './fav-list-card/fav-list-card.component';
import './fav-list.container.component.css';

const FavListContainer = ({
    favList,
    setFavList
}:{
    favList: string[];
    setFavList: (favList: string[]) => void;
}) => {


    const handleDelete = (deleteResult: string):void =>{
        const  newFavList:string[] = favList.filter((item => item != deleteResult));
        setFavList(newFavList);
    }

    return(
        <div className='favListContainer'>
            <h3>saved</h3>
            <div className='favList'>
               {favList.map((result) =>(
                <FavListCard result={result} handleDeleteResult={handleDelete}/>
               ))}
            </div>
        </div>
    );

}

export default FavListContainer;