import { useState } from 'react';
import InputForm from './InputForm';
import LeanCanvas from './LeanCanvas';

const App = () => {
  const [canvasData, setCanvasData] = useState(null);

  const handleFormSubmit = (data) => {
    setCanvasData(data);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Lean Canvas App</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {canvasData && <LeanCanvas data={canvasData} />}
      <h1>my business idea</h1>
    </div>
  );
};

export default App;
