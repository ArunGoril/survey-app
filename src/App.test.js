import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />
        },
    }
})

test("should render navbar", () => {
    render(<App />);
    const navbarText = screen.getByText(/Onboarding Survey/i);
    expect(navbarText).toBeInTheDocument();
})