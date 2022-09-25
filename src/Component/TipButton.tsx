import React, {useContext} from 'react';
import {TipContext} from "../context";

type Props = {
  tip?: any
}

const TipButton = ({ tip } : Props ) => {
    const tipContext = useContext( TipContext );

    return(
    <>
        {
        typeof tip !== 'number' ? (
            <input type="number" onChange={ e => tipContext.setTip(Number(e.target.value)) } className='inline py-5 bg-cyan-100 text-zinc-600 p-4 w-[120px]' placeholder={tip}/>
            ) : (
            <button
                onClick={() => tipContext.setTip( tip ?? 0 ) }
                className={`inline py-5 bg-teal-900 text-white w-[120px] text-center`}>
                { tip }%
            </button>
            )
        }

    </>
    )
}

export default TipButton;