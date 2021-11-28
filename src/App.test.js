import { render } from "@testing-library/react";
import App from './App';

test('testFirstLoader', () => {
    const main = render (<App/>);
    const div = main.container.querySelector("div");
    expect (div.className).toBe("loaders");
})


