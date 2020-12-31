import React from 'react';

interface Props {
  name: string;
}

const App = (props: Props): JSX.Element => {
  const { name } = props;

  console.log('Render');

  return (
    <>
      <h1>Hello {name}!</h1>
    </>
  );
};

export default App;
