import React from 'react';
import ReactDOM from 'react-dom/client';

import {Box} from './components/Box'

import { Starts } from './components/Stars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box />
    <Starts />

    {/* https://iconmonstr.com/star-3-svg/ */}
  </React.StrictMode>
);