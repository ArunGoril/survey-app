import { fireEvent, render, screen } from "@testing-library/react";
import SocialMediaInfo from "../SocialMediaInfo";

const mockedFn = jest.fn();
window.confirm = jest.fn(() => ({}));

const MockSocialMediaInfo = ({ userData }) => {
    return (
        <SocialMediaInfo
            userData={userData}
            handleChange={mockedFn}
            nextStep={mockedFn}
            prevStep={mockedFn}
            resetForm={mockedFn}
        />
    )
};

describe("SocialMediaInfo component testing", () => {
    // const { ageGroup, websiteLink, emailType, facebookLink, twitterLink, linkedLink } = userData;
    const user = {
        ageGroup: "",
        websiteLink: "",
        emailType: "",
        facebookLink: "",
        twitterLink: "",
        linkedLink: ""
    }
    
    test("should render 3 buttons", () => {
        render(<MockSocialMediaInfo userData={user} />);
        const buttonList = screen.getAllByRole("button");
        expect(buttonList).toHaveLength(3);
    })

    test("should render 6 input fields", () => {
        render(<MockSocialMediaInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        expect(inputList).toHaveLength(6);
    })

    test("all input field should be empty at first go", () => {
        render(<MockSocialMediaInfo userData={user} />);
        const inputList = screen.getAllByTestId("input");
        inputList.forEach(input => {
            expect(input.value).toBe("");
        })
    })

    test("should not render next button", () => {
        render(<MockSocialMediaInfo userData={user} />);
        const nextBtn = screen.queryByText(/next/i);
        expect(nextBtn).not.toBeInTheDocument();
    })

    test("should be able to reset the form", () => {
        render(<MockSocialMediaInfo userData={user} />);
        const cancelBtn = screen.getByText(/cancel/i);
        const inputList = screen.getAllByTestId("input");

        fireEvent.click(cancelBtn);
        inputList.forEach(input => {
            expect(input.value).toMatch("");
        })
    })
})