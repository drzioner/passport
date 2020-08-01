import { createStore } from 'global-hook-store';

const GlobalState = createStore(
  {
    section: 'home',
    theme: localStorage.getItem('theme') || true,
  },
  {},
);

export default GlobalState;
