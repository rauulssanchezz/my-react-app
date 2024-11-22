import './fav-list-card.component.css';

const FavListCard = ({
    result
}:{
    result: string;
}) => {
    return(
    <div className='listCard'>
        <p>{result}</p>
        <img src='Union.png'/>
    </div>
    );
}

export default FavListCard;