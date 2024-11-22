import './convert.footer.component.css'

const ConvertFooter = ({conversion}: {conversion: [number,string]})=>{
    const [result,unit] = conversion;
    return(
        <div className='convertFooterContainer'>
            <img src="Heart@2x.png"/>
            <div></div>
            <p id='pResult'>{result} {unit}</p>
        </div>
    )
}

export default ConvertFooter;