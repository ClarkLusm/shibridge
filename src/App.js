import { useEffect, useState } from 'react';
import Header from './Header';
import Transfer from './Transfer';

function App() {

  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    windowResize();
  }, [])

  window.onresize = () => {
    windowResize();
  }

  const windowResize = () => {
    const h = window.innerHeight,
      w = window.innerWidth;
    setLandscape(h > w);
  }

  return (
    <div className={landscape ? 'landscape' : ''}>
      <Header />
      <Transfer />
    </div>
  );
}

export default App;
