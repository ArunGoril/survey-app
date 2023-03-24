import { fireEvent, render, screen } from "@testing-library/react";
import MarketingInfo from "../MarketingInfo";

const mockedFn = jest.fn();
jest.mock('react-apexcharts', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />
        },
    }
})
window.confirm = jest.fn(() => ({}));

const MockMarketingInfo = ({ userData }) => {
    return (
        <MarketingInfo
            userData={userData}
            handleChange={mockedFn}
            nextStep={mockedFn}
            prevStep={mockedFn}
            resetForm={mockedFn}
        />
    )
};

describe("MarketingInfo component testing", () => {
    // const { moderatePercentile, growthPercentile, aggressiveGrowthPercentile} = userData;
    const user = {
        moderatePercentile: "",
        growthPercentile: "",
        aggressiveGrowthPercentile: ""
    }

    test("should render 3 buttons", () => {
        render(<MockMarketingInfo userData={user} />);
        const buttonList = screen.getAllByRole("button");
        expect(buttonList).toHaveLength(3);
    })

    test("should render 3 input fields", () => {
        render(<MockMarketingInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        expect(inputList).toHaveLength(3);
    })

    test("all input field should be empty at first go", () => {
        render(<MockMarketingInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        inputList.forEach(input => {
            expect(input.value).toBe("");
        })
    })

    test("should be able to reset the form", () => {
        render(<MockMarketingInfo userData={user} />);
        const cancelBtn = screen.getByText(/cancel/i);
        const inputList = screen.getAllByTestId("input");

        fireEvent.click(cancelBtn);
        inputList.forEach(input => {
            expect(input.value).toMatch("");
        })
    })
})