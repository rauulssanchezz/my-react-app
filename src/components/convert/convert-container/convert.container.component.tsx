import { useState } from "react";
import ConvertFooter from "../convert-footer/convert.footer.component";
import ConvertFunctional from "../convert-funtional/convert.functional.component";
import "./convert.container.component.css"

const Convert = () =>{

    const [conversion,setConversion] = useState<[number,string]>([0,'']);

    const handleConversionResult = (newResult: number, unit: string) => {
        setConversion([newResult,unit]);
    }

    return(
        <div className="convertContainer">
            <div className="convertTitle">
                <h1>convert</h1>
            </div>
            <ConvertFunctional onConversion={handleConversionResult}/>
            <ConvertFooter conversion={conversion}/>
        </div>
    );

};


export default Convert;