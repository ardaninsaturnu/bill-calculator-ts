import { createContext } from 'react';

export const TipContext = createContext<{
    result: number;
    setResult: ( value: number ) => void;

    tip: number;
    setTip: ( value: number ) => void;

    totalTip: number;
    setTotalTip: ( value: number ) => void;

    perPerson: number;
    setPerPerson: ( value: number ) => void;

    bill: number;
    setBill: ( value: number ) => void;

    peopleCount: number;
    setPeopleCount: ( value: number ) => void;

}>({
    result: 0,
    setResult: () => {},

    tip: 0,
    setTip: () => {},

    totalTip: 0,
    setTotalTip: () => {},

    perPerson: 0,
    setPerPerson: () => {},

    bill: 0,
    setBill: () => {},

    peopleCount: 0,
    setPeopleCount: () => {},
});