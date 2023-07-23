import React from 'react';

const LeanCanvas = ({ data }) => {
  return (
    <>
      <div className='grid grid-cols-5 grid-rows-4 gap-4 mt-10'>
        <div className='row-span-3 border border-gray-300 p-4 bg-red-300'>
          <h2 className='text-2xl font-bold mb-4'>Problem</h2>
          <p className='text-lg'>{data.problem}</p>
          <h2 className='text-2xl font-light mb-4'>Existing Alternatives</h2>
          <p className='text-lg'>{data.existingAlternatives}</p>
        </div>
        <div className='border row-span-1 border-gray-300 p-4 bg-green-300'>
          <h2 className='text-xl font-bold mb-2'>Solution</h2>
          <p className='text-lg'>{data.solution}</p>
        </div>
        <div className='col-span-1 row-span-3 border border-gray-300 p-4 bg-blue-300'>
          <h2 className='text-2xl font-bold mb-4'>Unique Value Proposition</h2>
          <p className='text-lg'>{data.uniqueValueProposition}</p>
          <h2 className='text-2xl font-light mb-4'>High-Level Concepts</h2>
          <p className='text-lg'>{data.highLevelConcepts}</p>
        </div>
        <div className='border border-gray-300 p-4 bg-yellow-300'>
          <h2 className='text-xl font-bold mb-2'>Unfair Advantage</h2>
          <p className='text-lg'>{data.unfairAdvantage}</p>
        </div>
        <div className='col-span-1 row-span-3 border border-gray-300 p-4 bg-orange-400'>
          <h2 className='text-2xl font-bold mb-4'>Customer Segments</h2>
          <p className='text-lg'>{data.customerSegments}</p>
          <h2 className='text-2xl font-light mb-4'>Early Adopters</h2>
          <p className='text-lg'>{data.earlyAdopters}</p>
        </div>
        <div className='border row-span-1.5 border-gray-300 p-4 bg-red-600'>
          <h2 className='text-xl font-bold mb-2'>Key Metrics</h2>
          <p className='text-lg'>{data.keyMetrics}</p>
        </div>

        <div className='border border-gray-300 p-4 bg-pink-600'>
          <h2 className='text-xl font-bold mb-2'>Channels</h2>
          <p className='text-lg'>{data.channels}</p>
        </div>
        {/* <div className='border border-gray-300 p-4'>
          <h2 className='text-xl font-bold mb-2'>Cost Structure</h2>
          <p className='text-lg'>{data.costStructure}</p>
        </div>
        <div className='border border-gray-300 p-4'>
          <h2 className='text-xl font-bold mb-2'>Revenue Streams</h2>
          <p className='text-lg'>{data.revenueStreams}</p>
        </div> */}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='border border-gray-300 p-4 col-span-2 bg-emerald-700'>
          <h2 className='text-xl font-bold mb-2'>Cost Structure</h2>
          <p className='text-lg'>{data.costStructure}</p>
        </div>
        <div className='border border-gray-300 p-4 col-span-2 bg-purple-500'>
          <h2 className='text-xl font-bold mb-2'>Revenue Streams</h2>
          <ul className='list-disc list-inside'>
            <li className='text-lg'>{data.revenueStreams}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeanCanvas;
