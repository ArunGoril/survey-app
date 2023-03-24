import { render, screen } from "@testing-library/react";
import UserForm from "../UserForm";

jest.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />
        },
    }
})

describe("UserForm component testing", () => {
    test("should render progressbar", () => {
        render(<UserForm />);
        const progressbarText1 = screen.getByText(/basic info/i);
        const progressbarText2 = screen.getByText(/marketing/i);
        const progressbarText3 = screen.getByText(/social media/i);
        expect(progressbarText1).toBeInTheDocument();
        expect(progressbarText2).toBeInTheDocument();
        expect(progressbarText3).toBeInTheDocument();
    });
})