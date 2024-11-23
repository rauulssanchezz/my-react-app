import './convert.footer.component.css'

const ConvertFooter = ({
    result,
    unit,
    selectUnit,
    amount,
    favList,
    setFavList
}: {
    result: number;
    unit: string;
    selectUnit: string;
    amount: number;
    favList: string[],
    setFavList: (favList:string[]) => void;
}
)=>{

    const handleFavList = () => {
        const value: string = amount.toString()+' '+selectUnit+' '+result.toString();
        const newFavList = [...favList];
        if(!newFavList.includes(value))
        newFavList.push(value);
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