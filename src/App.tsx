import React from 'react';
import Toggle from './components/Toggle';

interface Props {
  name: string;
}

const App = (props: Props): JSX.Element => {
  const { name } = props;

  console.log('Render');

  return (
    <>
      <h1>Hello {name}!</h1>
      <Toggle />
    </>
  );
};

export default App;
