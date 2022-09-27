import React from 'react';

type Props = {
  tip?: any,
  setTip: ( value:number ) => void;
}

const
    TipButton = ({ tip, setTip } : Props ) => {
    return(
        <>
            {
            typeof tip !== 'number' ? (
                <input type="number" onChange={ e => setTip( Number(e.target.value ))} className='inline py-5 bg-cyan-100 text-zinc-600 p-4 w-[120px]' placeholder={tip}/>
                ) : (
                <button
                    onClick={() => setTip( tip ?? 0 ) }
                    className={`inline py-5 bg-teal-900 text-white w-[120px] text-center`}>
                    { tip }%
                </button>
                )
            }
        </>
    )
}

export default TipButton;