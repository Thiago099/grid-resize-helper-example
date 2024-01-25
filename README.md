## Description

This program allow you to make edges of your grid layout resizable

## Limitations

You must specify the areas of your grid you want to make resizable and your grid must have a gap in order for it to work

## Usage:


```js
   import { makeGridAreasResizable } from "grid-resize-helper"

    let gridElement = document.querySelector('.container');

    makeGridAreasResizable(gridElement, [
        { 
            query: ".menu", 
            helpers: [
                { 
                    position: "x+",
                    edge: 0 
                },
            ]
        },
        {
            query: ".right",
            helpers: [
                {
                    position: "x-",
                    edge: 1
                },
            ]
        },
        {
            query: ".header",
            helpers: [
                {
                    position: "y+",
                    edge: 0
                },
            ]
        },
        {
            query: ".footer",
            helpers: [
                {
                    position: "y-",
                    edge: 1
                },
            ]
        }
    ])
```
