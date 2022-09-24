import { useState } from "react";
import Result from './Component/Result';
import Calculate from "./Component/Calculate";

function App() {
    const [ result, setResult ] = useState<number>(0 );
    const [ totalTip, setTotalTip ] = useState<number>(0 );
    const [ perPerson, setPerPerson ] = useState<number>(0 );
    const [ bill, setBill ] = useState(0 );
    const [ tip, setTip ] = useState(0 );
    const [ peopleCount, setPeopleCount ] = useState(0 );

    const resetAll = ()  => {
        setBill( 0 );
        setTip( 0 );
        setPeopleCount( 0 );
        setResult(0 );
    }

  return (
      <div className="bg-cyan-100 h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl text-gray-600">SPLITTER</h2>
          <div className="p-5 flex w-3/4 mx-auto bg-white rounded-xl">
              <Calculate setBill={setBill} bill={bill} setTip={setTip} tip={tip} peopleCount={peopleCount} setPeopleCount={setPeopleCount} setResult = { setResult } setTotalTip = { setTotalTip } setPerPerson = { setPerPerson } result = { result } />
              <Result result = { result } totalTip = { totalTip } perPerson = { perPerson } resetAll = { resetAll } />
          </div>
      </div>
  );
}

export default App;
