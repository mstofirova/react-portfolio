import { render } from "@testing-library/react";
import AboutMe from './AboutMe.js';
import master from "../../master";
import React from 'react';

test('testRenderAvatar', () => {
    const main = render (<AboutMe/>);
    const section = main.container.querySelector("section");
    const div = section.querySelector("div");
    expect (div.className).toBe("container");
})

test('testMasterInfo', () => {
    const main = render (<AboutMe/>);
    const section = main.container.querySelector("section");
    const divA = section.querySelector("img");
    expect(divA.id).toBe("profile-pic");
    expect(divA.alt).toBe("avatar");
})

test('testLinkingResume', () => {
    const main = render (<AboutMe/>);
    const section = main.container.querySelector("section");
    expect(
        section.querySelector("a").getAttribute("href")
      ).toBe(master.about.resumelink);
    expect(
        section.querySelector("a").getAttribute("href")
      ).toBe("#");
})
