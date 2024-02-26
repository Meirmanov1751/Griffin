import { render, screen } from "@testing-library/react";

import App from "../App"

describe("App componets testing",
    () => {
        test("Rendering test", () => { render(<App/>) })
    }
)