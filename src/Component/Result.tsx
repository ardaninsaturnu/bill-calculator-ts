import ResultInput from "./ResultInput";
import {useContext} from "react";
import {TipContext} from "../context";

type Props = {
    resetAll: () => void
}

const Result = ({ resetAll } : Props ) => {
    const tipContext = useContext( TipContext );
    return(
        <div className="bg-teal-900 w-1/2 p-10 rounded-2xl flex flex-col justify-between">
            <div>
                <ResultInput content="Tip Amount" group="person" amount={ tipContext.totalTip } />
                <ResultInput content="Total" group="person" amount={ tipContext.result } />
                <ResultInput content="Per Person" group="person" amount={ tipContext.perPerson } />
            </div>
          <button className="bg-cyan-700 text-cyan-900 w-full p-2 rounded-md" onClick={ resetAll }>RESET</button>
        </div>
    )
}

export default Result;


