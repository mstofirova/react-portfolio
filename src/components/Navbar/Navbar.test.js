import { render } from "@testing-library/react";
import NavbarLg from './navbarLg';
import NavbarSm from './navbarSm';
import React from 'react';

const lg = render (<NavbarLg/>);
const navLg = lg.container.querySelector("nav");

const sm = render (<NavbarSm/>);
const navSm = sm.container.querySelector("nav");


test('testCheckImg ', () => {
    expect(
        navLg.querySelector('img').alt)
        .toBe("logo");
})

test('testUlLi ', () => {
    const ul = navLg.querySelector("ul");
    const li = ul.querySelectorAll("li");
    var counter = 0;
    li.forEach( l => {
        if (l.querySelector('a')) {
            counter ++;
        }
    })
    expect(li.length).toBe(counter);
})

test('testRenderNavMain ', () => {
    const div = navSm.querySelector("div");
    expect(
        div.className)
        .toBe("navmain");
    expect(
        div.querySelector("div").className)
        .toBe("logo");
})

test('testDropdownItem ', () => {
    const li = navSm.querySelector("li");
    expect(
        li.className)
        .toBe("dropdown-item");
    expect(
        li.querySelector('a').textContent)
        .toBe("Home");
})
