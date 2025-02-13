import React from 'react';

const Header = React.lazy(() =>  import('header/Header'));

const App = () => (
  <div>
    <h1>Shell Application</h1>
    <React.Suspense fallback="Loading Header...">
      <Header />
    </React.Suspense>
  </div>
);

export default App;