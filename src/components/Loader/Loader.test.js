import { render } from "@testing-library/react";
import Loader from './Loader.js';

test('testRenderLoader', () => {
    const main = render (<Loader/>);
    const div = main.container.querySelector("div");
    expect (div.className).toBe("loaders");
    const img = div.querySelector("img");
    expect (img.className).toBe("loadingImg");
})
