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

    if (h > w) {
      document.body.classList.add('landscape');
    } else {
      document.body.classList.remove('landscape');
    }
  }

  return (
    <div>
      <Header />
      <Transfer />
    </div>
  );
}

export default App;
