import { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [canvasData, setCanvasData] = useState({
    problem: '',
    solution: '',
    keyMetrics: '',
    uniqueValueProposition: '',
    unfairAdvantage: '',
    channels: '',
    customerSegments: '',
    costStructure: '',
    revenueStreams: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCanvasData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(canvasData);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='problem'>
          Problem
        </label>
        <input
          type='text'
          id='problem'
          name='problem'
          value={canvasData.problem}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='solution'>
          Solution
        </label>
        <input
          type='text'
          id='solution'
          name='solution'
          value={canvasData.solution}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='keyMetrics'>
          Key Metrics
        </label>
        <input
          type='text'
          id='keyMetrics'
          name='keyMetrics'
          value={canvasData.keyMetrics}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='uniqueValueProposition'
        >
          Unique Value Proposition
        </label>
        <input
          type='text'
          id='uniqueValueProposition'
          name='uniqueValueProposition'
          value={canvasData.uniqueValueProposition}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='unfairAdvantage'
        >
          Unfair Advantage
        </label>
        <input
          type='text'
          id='unfairAdvantage'
          name='unfairAdvantage'
          value={canvasData.unfairAdvantage}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='channels'>
          Channels
        </label>
        <input
          type='text'
          id='channels'
          name='channels'
          value={canvasData.channels}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='customerSegments'
        >
          Customer Segments
        </label>
        <input
          type='text'
          id='customerSegments'
          name='customerSegments'
          value={canvasData.customerSegments}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='costStructure'>
          Cost Structure
        </label>
        <input
          type='text'
          id='costStructure'
          name='costStructure'
          value={canvasData.costStructure}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='revenueStreams'
        >
          Revenue Streams
        </label>
        <input
          type='text'
          id='revenueStreams'
          name='revenueStreams'
          value={canvasData.revenueStreams}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
