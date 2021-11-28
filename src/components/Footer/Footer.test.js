import { render } from "@testing-library/react";
import Footer from './footer.js';
import React from 'react';

test('testFormAtribute', () => {
    const main = render (<Footer/>);
        const section = main.container.querySelector("form");
        const t = section.querySelectorAll("input");
        expect(
            t[0].getAttribute("type")
          ).toBe("email");
        expect(
            t[1].getAttribute("type")
          ).toBe("submit");
        expect(
            t[1].getAttribute("value")
          ).toBe("Sign up");
    })

test('testContact', () => {
const main = render (<Footer/>);
    const section = main.container.querySelector("div");
    expect(
        section.querySelector("a").getAttribute("href")
      ).toBe("https://www.facebook.com");
    expect(
        section.querySelector('a').className)
        .toBe("facebook");
})