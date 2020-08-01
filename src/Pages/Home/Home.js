import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useState from 'global-hook-store';

import GlobalState from '../../Components/GlobalState';

function Home() {
  const { state, setState } = useState(GlobalState);
  const { section } = useParams();

  const optionMenu = () => {
    setState({
      ...state,
      section: section,
    });
  };
  useEffect(() => {
    optionMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return (
    <>
      <div>inicio de la app</div>
      <button
        onClick={() => {
          localStorage.setItem('theme', !state.theme);
          setState({
            ...state,
            theme: !state.theme,
          });
        }}>
        cambiar tema
      </button>
    </>
  );
}

export default Home;
