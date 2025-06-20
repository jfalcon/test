import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('Count Test', () => {
  it('counts add todo clicks', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const addButton = screen.getByTestId('test-button');
    const addInput = screen.getByLabelText('New todo text');
    const countMessage = screen.getByTestId('test-message');

    fireEvent.change(addInput, { target: { value: 'Hello' } });
    fireEvent.click(addButton);

    fireEvent.change(addInput, { target: { value: 'World' } });
    fireEvent.click(addButton);

    fireEvent.change(addInput, { target: { value: '!' } });
    fireEvent.click(addButton);
console.log('; ;', countMessage.innerHTML)
    // innerText doesn't seem to work with this library
    const count = parseInt((countMessage.innerHTML || '').replace(/[^0-9]/g, ''), 10) || 0;
    expect(count).toStrictEqual(3);
  });
})
