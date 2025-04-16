// App.js
import React, { useState } from 'react';
import Header from './Header';
// import other components if needed

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      {/* rest of your app content */}
    </div>
  );
}

export default App;
