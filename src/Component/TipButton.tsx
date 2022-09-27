import React, {useContext, useState} from 'react';
import {TipContext} from "../context";

type Props = {
  tip?: any,
}

const
    TipButton = ({ tip } : Props ) => {
    const tipContext = useContext(TipContext);
    const [tipValue, setTipValue ] = useState<number>(0)

    return(
        <>
            {
            typeof tip !== 'number' ? (
                <input type="number" onChange={ e => {
                    setTipValue( Number( e.target.value ))
                    tipContext.setTip( tipValue )
                }} className='inline py-5 bg-cyan-100 text-zinc-600 p-4 w-[120px]' placeholder={tip}/>
                ) : (
                <button
                    onClick={ () => {
                        setTipValue( tip )
                        tipContext.setTip( tipValue )
                    }}
                    className={`inline py-5 bg-teal-900 text-white w-[120px] text-center`}>
                    { tip }%
                </button>
                )
            }
        </>
    )
}

export default TipButton;