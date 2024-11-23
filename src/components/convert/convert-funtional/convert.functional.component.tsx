

import React from "react";
import "./convert.functional.component.css"

const ConvertFunctional= ({ 
    selectUnit,
    amount,
    result,
    setSelectUnit,
    setUnit,
    setAmount,
    setResult,
    handleOnExchange
 }:{
    selectUnit: string;
    amount: number;
    result: number;
    setSelectUnit: (selectUnit: string) => void;
    setUnit: (unit:string) => void;
    setAmount: (amount: number) => void;
    setResult: (result: number) => void;
    handleOnExchange: (amount: number, selectUnit: string,result: number) => void;
 }) => {

    const ifSelectResult =(selectValue:string,amount:number):[number,string] => {

        let result:number=0;
        let unit:string='';

        if(selectValue === 'km → miles'){
            result=Math.round((amount*0.621271)*100)/100;
            unit='miles';

        } else if(selectValue === 'miles → km'){
            result=Math.round((amount/1.609)*100)/100;
            unit='km';

        }else if(selectValue === 'feet → meters'){
            result=Math.round((amount*0.3048)*100)/100;
            unit='meters';

        }else if(selectValue === 'meters → feet'){
            result=Math.round((amount/3.281)*100)/100;
            unit='feet';

        }else if(selectValue === 'centimeters → inches'){
            result=Math.round((amount*0.393701)*100)/100;
            unit='inches';

        }else if(selectValue === 'inches → centimeters'){
            result=Math.round((amount/2.54)*100)/100;
            unit='centimeters';

        }

        return [result,unit];
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newAmount = parseFloat(event.target.value);
        setAmount(newAmount);

        const [result,unit] = ifSelectResult(selectUnit,newAmount);
        setResult(result);
        setUnit(unit);
    }

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        
        selectUnit = event.target.value;
        setSelectUnit(selectUnit);
        

        const selectUnitList: string[] = selectUnit.split(' ');
        const newUnit = selectUnitList[2];
        setUnit(newUnit);

        const [result,unit] = ifSelectResult(selectUnit,amount);
        setResult(result);
        setUnit(unit);
    }

    const onExchange = () => {
        handleOnExchange(amount,selectUnit,result);
    }

        return(
            <div className="convertFunctionalContainer">
                <select id="Unit" className="select" value={selectUnit} onChange={onSelectChange}>
                    <option>km → miles</option>
                    <option>miles → km</option>
                    <option>feet → meters</option>
                    <option>meters → feet</option>
                    <option>centimeters → inches</option>
                    <option>inches → centimeters</option>
                </select>
                <img className="convertFunctionalImg" src="whiteExchange.png" onClick={onExchange}/>
                <input 
                    id="Amount"
                    type="number" 
                    name="Result" 
                    placeholder="Result" 
                    value={amount} 
                    onChange={onInputChange}
                >
                
                </input>
            </div>
        )

    
}



export default ConvertFunctional;