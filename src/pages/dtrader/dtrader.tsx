import React from 'react';
import { observer } from 'mobx-react-lite';
import IframeWrapper from '@/components/iframe-wrapper';

const Dtrader = observer(() => {
    return (
        <IframeWrapper
            src='https://trading-8wrj.vercel.app/'
            title='DTrader'
            className='dtrader-container'
        />
    );
});

export default Dtrader;
