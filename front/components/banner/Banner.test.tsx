import {render,screen} from "@testing-library/react";
import Banner from "./Banner";
import "@testing-library/jest-dom";

describe("Banner",()=>{
    it("Render title",()=>{
        const args:IBanner={
            title:"Title"
        }

        const component=render(<Banner {...args} />);

        expect(component.container).toHaveTextContent(args.title);

    })
})