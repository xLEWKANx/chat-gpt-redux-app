import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import ContactFormHooks from './ContactFormHooks';

// Mock store
const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

test('form should validate first name and last name as non-empty', async () => {
  renderWithRedux(<ContactFormHooks />);
  
  const submitButton = screen.getByText('Submit');


  userEvent.type(screen.getByPlaceholderText(/First Name/i), ' ');
  userEvent.type(screen.getByPlaceholderText(/Last Name/i), ' ');
  userEvent.click(submitButton);

  await screen.findByText(/Invalid first name/i);
  await screen.findByText(/Invalid last name/i);
});

test('form should validate email as an actual email', () => {
  renderWithRedux(<ContactFormHooks />);

  const submitButton = screen.getByText('Submit');

  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'not-an-email' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});

test('message should be at least 10 characters long', async () => {
  renderWithRedux(<ContactFormHooks />);

  const submitButton = screen.getByText('Submit');

  userEvent.type(screen.getByPlaceholderText('Message'), 'Short');
  userEvent.click(submitButton);

  await screen.findByText('Message should be at least 10 characters long');
});