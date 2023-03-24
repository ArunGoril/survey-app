import { fireEvent, render, screen } from "@testing-library/react";
import BasicInfo from "../BasicInfo";

const mockedFn = jest.fn();
window.confirm = jest.fn(() => ({}));

const MockBasicInfo = ({ userData }) => {
    return (
        <BasicInfo
            userData={userData}
            handleChange={mockedFn}
            nextStep={mockedFn}
            resetForm={mockedFn}
        />
    )
};

describe("BasicInfo component testing", () => {
    // const {firstName, middleName, lastName, birthday, email, commEmail, interests } = userData;
    const user = {
        firstName: "",
        middleName: "",
        lastName: "",
        birthday: "",
        email: "",
        commEmail: "",
        interests: ""
    }
    
    test("should render 2 buttons", () => {
        render(<MockBasicInfo userData={user} />);
        const buttonList = screen.getAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })

    test("should render 6 input fields", () => {
        render(<MockBasicInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        expect(inputList).toHaveLength(6);
    })

    test("all input field should be empty at first go", () => {
        render(<MockBasicInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        inputList.forEach(input => {
            expect(input.value).toBe("");
        })
    })

    test("should not render prev button", () => {
        render(<MockBasicInfo userData={user} />);
        const prevBtn = screen.queryByText(/prev/i);
        expect(prevBtn).not.toBeInTheDocument();
    })

    test("should be able to reset the form", () => {
        render(<MockBasicInfo userData={user} />);
        const cancelBtn = screen.getByText(/cancel/i);
        const inputList = screen.getAllByTestId("input");

        fireEvent.click(cancelBtn);
        inputList.forEach(input => {
            expect(input.value).toMatch("");
        })
    })
})