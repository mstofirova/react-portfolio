import { render } from "@testing-library/react";
import Contact from './contact';

const main = render (<Contact/>);
const divContact = main.container.querySelector("div");
const divWrapper = divContact.querySelector("div");

test('contact me', () => {
    const divHeader = divWrapper.querySelector("div");
    expect(
        divHeader.querySelector('p').className)
        .toBe("contact-header-main-text");
    expect(
        divHeader.querySelector('p').textContent)
        .toBe("Contact Me");
})

test('contact me', () => {
    const form = divWrapper.querySelector("form");
    const inputs = form.querySelectorAll("input");
    inputs.forEach(div => {
        expect(
            div.className)
            .toBe("contact-input");
    })
})