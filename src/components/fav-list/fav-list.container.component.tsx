
import FavListCard from './fav-list-card/fav-list-card.component';
import './fav-list.container.component.css';

const FavListContainer = ({
    favList
}:{
    favList: string[];
}) => {

    return(
        <div>
            <h3>saved</h3>
            <div className='favList'>
               {favList.map((result) =>(
                <FavListCard result={result}/>
               ))}
            </div>
        </div>
    );

}

export default FavListContainer;