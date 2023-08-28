import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from "./App";
import store from "./redux/store"

describe('integration tests for ContactFormHooks and FormDataList', () => {
  it('should add a contact and display it in the list', async () => {

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageInput = screen.getByPlaceholderText('Message');
    const submitButton = screen.getByText('Submit');

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(emailInput, 'john.doe@example.com');
    userEvent.type(messageInput, 'Hello, this is a test message!');

    userEvent.click(submitButton);

    await screen.findByText('John');
    await screen.findByText('Doe');
    await screen.findByText('john.doe@example.com');
    await screen.findByText('Hello, this is a test message!');
  });
});
