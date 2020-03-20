import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';


export const overmindWrapper = (state, Component) => {
  const overmind = createOvermind({ state });
  return mount(
    <Provider value={overmind}>
      <Component />
    </Provider>
  );
}
