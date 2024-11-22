import { useState } from "react";
import ConvertFooter from "./convert-footer/convert.footer.component";
import ConvertFunctional from "./convert-funtional/convert.functional.component";
import "./convert.container.component.css"

const Convert = ({
    favList,
    setFavList
}:{
    favList: string[];
    setFavList : (favList: string[]) => void;
}) =>{

    const [amount, setAmount] = useState<number>(0);
    const [selectUnit,setSelectUnit] = useState<string>('km → miles');
    const [unit,setUnit] = useState<string>('');
    const [result,setResult] = useState<number>(0);
    


    const handleSelectUnit = (selectUnit:string) =>{
        setSelectUnit(selectUnit);
    }

    const handleUnit = (unit:string) => {
        setUnit(unit);
    }

    const handleAmount = (amount: number) => {
        setAmount(amount);
    }

    const handleOnExchange = (amount: number, selectUnit: string,result: number) =>{
        const newAmount = result;
        const newResult = amount;

        const selectUnitList = selectUnit.split(' ');
        const newSelectUnit = selectUnitList[2] + ' ' + selectUnitList[1] + ' ' + selectUnitList[0];
        const newUnit = selectUnitList[2];
        
        setAmount(newAmount);
        setResult(newResult);
        setSelectUnit(newSelectUnit);
        setUnit(newUnit);
    }

    const handleFavList = (favList:string[]) => {
        console.log('favList desde container'+favList)
        setFavList(favList);
    }

    return(
        <div className="convertContainer">
            <div className="convertTitle">
                <h1>convert</h1>
            </div>
            <ConvertFunctional 
                selectUnit={selectUnit} 
                amount={amount}
                result={result}
                setSelectUnit={handleSelectUnit}
                setUnit={handleUnit}
                setAmount={handleAmount}
                setResult={setResult}
                handleOnExchange={handleOnExchange}
                />
            <ConvertFooter result={result} unit={unit} favList={favList} setFavList={handleFavList}/>
        </div>
    );

};


export default Convert;