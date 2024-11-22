

import "./convert.functional.component.css"

const ConvertFunctional= ({ onConversion }:{onConversion: (result:number,unit:string) => void}) => {

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

    const onInputChange = ():void =>{

        const select = document.getElementById('Unit') as HTMLSelectElement;
        const input = document.getElementById('Amount') as HTMLInputElement;

        const selectValue:string = select.value;
        const amount:number = parseFloat(input.value);

        const results:[number,string] = ifSelectResult(selectValue,amount);

        const result:number = results[0];
        const unit:string = results[1];

        

        onConversion(result,unit) ;

    }

    const onExchange = ():void=>{
        const select = document.getElementById('Unit') as HTMLSelectElement;
        const input = document.getElementById('Amount') as HTMLInputElement;
        const pResult = document.getElementById('pResult') as HTMLParagraphElement;

        const pResultValue:string[] = pResult.textContent!.split(' ')

        const selectValue:string = select.value;
        const amount:number = parseFloat(input.value);

        const obtainUnitValues:string[] = selectValue.split(' ')
        const exchangeSelectValue = obtainUnitValues[2] + ' ' + obtainUnitValues[1] + ' ' + obtainUnitValues[0];

        const exchangePSelectValue:string = obtainUnitValues[0]; 

        const result:number = parseFloat(pResultValue[0]);

        pResult.textContent =amount.toString() +' '+ exchangePSelectValue;

        select.value=exchangeSelectValue;

        input.value= result.toString();
        
    }

        return(
            <div className="convertFunctionalContainer">
                <select id="Unit" className="select" onChange={onInputChange}>
                    <option>km → miles</option>
                    <option>miles → km</option>
                    <option>feet → meters</option>
                    <option>meters → feet</option>
                    <option>centimeters → inches</option>
                    <option>inches → centimeters</option>
                </select>
                <img className="convertFunctionalImg" src="whiteExchange.png" onClick={onExchange}/>
                <input id="Amount" type="number" name="Result" placeholder="Result" onChange={onInputChange}>
                
                </input>
            </div>
        )

    
}



export default ConvertFunctional;