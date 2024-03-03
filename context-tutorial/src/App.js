import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
  // return (
  //   <ColorContext.Provider value={{ color: 'red' }}>
  //     <div>
  //       <ColorBox />
  //     </div>
  //   </ColorContext.Provider>
  // );
  // return (
  //   <div>
  //     <ColorBox />
  //   </div>
  // );
};

export default App;
