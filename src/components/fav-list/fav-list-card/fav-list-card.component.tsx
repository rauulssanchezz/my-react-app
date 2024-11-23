import './fav-list-card.component.css';

const FavListCard = ({
    result,
    handleDeleteResult
}:{
    result: string;
    handleDeleteResult: (deleteResult: string) => void;
}) => {

    const deleteResult = ():void =>{
        handleDeleteResult(result);
    }

    return(
    <div className='listCard'>
        <p>{result}</p>
        <img src='Union.png' onClick={deleteResult}/>
    </div>
    );
}

export default FavListCard;