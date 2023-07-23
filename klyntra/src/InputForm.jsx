// InputForm.jsx
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [canvasData, setCanvasData] = useState({
    problem: '',
    solution: '',
    keyMetrics: '',
    uniqueValueProposition: '',
    unfairAdvantage: '',
    channels: '',
    customerSegments: '',
    existingAlternatives: '',
    highLevelConcepts: '',
    earlyAdopters: '',
    costStructure: '',
    revenueStreams: '',
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      setInputText((prevText) => prevText + '\n');
      e.preventDefault();
    }
  };

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
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='problem'>
          Problem
        </label>
        <textarea
          //   type='textarea'
          id='problem'
          name='problem'
          value={canvasData.problem}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='solution'>
          Solution
        </label>
        <textarea
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
        <textarea
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
        <textarea
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
        <textarea
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
        <textarea
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
        <textarea
          type='text'
          id='customerSegments'
          name='customerSegments'
          value={canvasData.customerSegments}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='existingAlternatives'
        >
          Existing Alternatives
        </label>
        <textarea
          type='text'
          id='existingAlternatives'
          name='existingAlternatives'
          value={canvasData.existingAlternatives}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-lg font-bold mb-2'
          htmlFor='highLevelConcepts'
        >
          High-Level Concepts
        </label>
        <textarea
          type='text'
          id='highLevelConcepts'
          name='highLevelConcepts'
          value={canvasData.highLevelConcepts}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='earlyAdopters'>
          Early Adopters
        </label>
        <textarea
          type='text'
          id='earlyAdopters'
          name='earlyAdopters'
          value={canvasData.earlyAdopters}
          onChange={handleChange}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-lg font-bold mb-2' htmlFor='costStructure'>
          Cost Structure
        </label>
        <textarea
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
        <textarea
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
