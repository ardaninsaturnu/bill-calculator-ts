import CalculateInput from "./CalculateInput";
import TipButton from "./TipButton";
import { useContext, useEffect, useState } from "react";
import { TipContext } from "../context";

const values = [ 5,10,15,25,50, 'Custom' ];

const Calculate = () => {
    const [ totalTip, setTipTotal ] = useState(0 );
    const [ tip, setTip ] = useState(0);
    const tipContext = useContext( TipContext );

    useEffect(() => {
        if( !tipContext.bill ) {
            tipContext.setTotalTip( 0 );
            tipContext.setResult( 0 );
            tipContext.setPerPerson( 0 );
            return
        }
        calculateTip( tipContext.tip, tipContext.peopleCount, tipContext.bill );
        calculateBill( tipContext.totalTip, tipContext.bill );
        calculatePerPerson( tipContext.result, tipContext.peopleCount );

    },[ tipContext.tip, tipContext.bill, tipContext.peopleCount, tipContext.totalTip, tipContext.result ]);

    const calculateTip = ( tip: number, peopleCount: number, bill: number ) => {

        if( bill && !peopleCount ) {
            let tipRate = ( bill * tip ) / 100
            tipContext.setTotalTip( tipRate )

        } else if( bill && peopleCount ) {
            let tipRate = ( bill * tip ) / 100
            setTipTotal( tipRate * peopleCount )
            tipContext.setTotalTip( tipRate * peopleCount )
        }
    }

    const calculateBill = ( totalTip: number, bill: number ) => {
        if( bill ) {
            tipContext.setResult( totalTip + ( bill  * tipContext.peopleCount ));
        } else {
            tipContext.setResult( 0 );
        }
    }

    const calculatePerPerson = ( result: number, peopleCount: number ) => {
        if( result && peopleCount ) {
            tipContext.setPerPerson( result / peopleCount );
        }
    }

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
            <CalculateInput value={ tipContext.bill } setValue={ tipContext.setBill } name="bill" label="bill" />
            <div>
                <p className="mb-5">Select Tip %</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {
                        values.map( ( tipAmount, index ) => <TipButton tip={ +tipAmount } key ={ index } /> )
                    }
                </div>
            </div>
            <CalculateInput value={ tipContext.peopleCount } setValue={ tipContext.setPeopleCount } name="people" label="Number of people" />
        </div>
    )
}

export default Calculate;