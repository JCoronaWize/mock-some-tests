import { render, screen } from '@testing-library/react';
import App from './App';
import { useFetchData } from './useFetchData';

// const mockFakeResponse = "mock-response: Request was intercepted to run a test";
const mockFakeResponse = {
  loading: false,
  data: "Mock-response: Request was intercepted to run a test",
  error: null,
}
jest.mock('./useFetchData');

describe('Test inside App', () => {
  beforeEach(() => {
    useFetchData.mockImplementation(() => mockFakeResponse)
  })
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('text should appear on first load', () => {
    render(<App />);
    const theMessage = screen.getByText(/get meessage/i);
    expect(theMessage).toBeInTheDocument();
  });
  
  test('image should be displayed after render', async () => {
    render(<App />);
    const theImage = await screen.findByAltText(/test-img/i, undefined, {timeout: 2000});
    expect(theImage).toBeInTheDocument();
  });

  test('Response info is rendered correctly. Displays macked response text', async () => {
    render(<App />);
    const theText = await screen.findByTitle(/trivia-text/i, undefined, {timeout: 2000});
    expect(theText).toHaveTextContent(/mock-response/i);
  });

})
