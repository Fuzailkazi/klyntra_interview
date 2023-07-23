// import React from 'react';

const LeanCanvas = ({ data }) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Problem</h2>
        <p className='text-lg'>{data.problem}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Solution</h2>
        <p className='text-lg'>{data.solution}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Key Metrics</h2>
        <p className='text-lg'>{data.keyMetrics}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Unique Value Proposition</h2>
        <p className='text-lg'>{data.uniqueValueProposition}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Unfair Advantage</h2>
        <p className='text-lg'>{data.unfairAdvantage}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Channels</h2>
        <p className='text-lg'>{data.channels}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Customer Segments</h2>
        <p className='text-lg'>{data.customerSegments}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Cost Structure</h2>
        <p className='text-lg'>{data.costStructure}</p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-2xl font-bold mb-4'>Revenue Streams</h2>
        <p className='text-lg'>{data.revenueStreams}</p>
      </div>
    </div>
  );
};

export default LeanCanvas;
