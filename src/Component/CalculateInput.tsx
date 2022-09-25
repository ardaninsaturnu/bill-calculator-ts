import {useContext} from "react";
import {TipContext} from "../context";

type Props = {
    value?: number,
    setValue: ( value: number ) => void,
    label: string,
    name: string,
}

const CalculateInput = ({ value, setValue, label, name } : Props ) => {
    const tipContext = useContext(TipContext);

    return(
        <div className="flex flex-col mb-5">
         <label className="text-zinc-600 text-md mb-2">{ label }</label>
         <input
             className="p-2 bg-cyan-100 rounded-xl"
             value={ value }
             name={ name }
             id={ name }
             onInput={ e => {
             setValue( Number(( e.target as HTMLInputElement).value ))
             tipContext.result === 0 && tipContext.setResult( Number(( e.target as HTMLInputElement ).value ))
         }} />
        </div>
    )
}

export default CalculateInput;