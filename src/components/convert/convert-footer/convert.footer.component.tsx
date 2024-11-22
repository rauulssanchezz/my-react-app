import './convert.footer.component.css'

const ConvertFooter = ({
    result,
    unit,
    favList,
    setFavList
}: {
    result: number;
    unit: string;
    favList: string[],
    setFavList: (favList:string[]) => void;
}
)=>{

    const handleFavList = () => {
        console.log('fav funciona' +favList);
        const newFavList = [...favList];
        newFavList.push(result.toString());
        setFavList(newFavList);
    }

    return(
        <div className='convertFooterContainer'>
            <img onClick={handleFavList} src="Heart@2x.png"/>
            <div></div>
            <p id='pResult'>{result} {unit}</p>
        </div>
    )
}

export default ConvertFooter;