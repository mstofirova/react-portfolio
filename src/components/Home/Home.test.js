import { render } from "@testing-library/react";
import Home from './Home';
import Data from "../../master.json";
import React from 'react';

const main = render (<Home/>);
const section = main.container.querySelector("section");


test('check master data ', () => {
    expect(
        section.querySelector("h1").textContent)
        .toBe(Data["firstname"]);
    expect(
        section.querySelector("h1").textContent)
        .toBe("First  Name");
})

test('href have i ', () => {
    const a = section.querySelectorAll("a");
    var counter = 0;
    a.forEach( div => {
        try{
            if (div.querySelector('i')) {
                counter ++;
           }
        }
        catch(e){
            console.log(e)
        }
    })
    expect(a.length).toBe(counter);
})
