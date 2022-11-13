import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MainApp } from './09-use-context/MainApp';

// import { TodoApp } from './08-use-reducer/TodoApp';
// import { Father } from './07-memo-work/Father';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-use-layout-effect/Layout';
// import { FocusScreen } from './04-use-ref/FocusScreen';
// import { FormWithCustomHook } from './02-use-effect/FormWithCustomHook';
// import { SimpleForm } from './02-use-effect/SimpleForm';
// import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook';
// import { CounterApp } from './01-use-state/CounterApp';
// import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);
