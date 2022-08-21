import React, {FC, ReactNode, useState} from 'react';

export interface IHookedProps {
    children?: ReactNode;
}

/**
 * This component uses hooks
 * @block
 */
const Hooked:FC<IHookedProps> = ({children}) => {
    const [ counter, setCounter ] = useState( 0 );

    return <div>
        Counter is {counter}
        <button type="button" onClick={() => setCounter( counter + 1 )}/>
    </div>
}

export default Hooked;