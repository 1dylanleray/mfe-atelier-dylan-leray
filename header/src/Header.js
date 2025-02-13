import React, {useState} from 'react';
import Button from './Button';
const Header = () =>{
    const [fontSize, setFontSize] = useState(16);

  const handleClick = () => {
    setFontSize(prevSize => prevSize + 2);
  };
    return (
        <div>
       <h2 style={{ fontSize: `${fontSize}px` }}>Header Micro Frontend</h2>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
    );
} ;

export default Header;