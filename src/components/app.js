import React, { useState } from "react";
import { Title } from "./title";
import { Tiles } from "./reviewTiles";
import reviews from "../data";

export const App = () => {
    const [index, setIndex] = useState(0);
    let review = reviews[index];

    function checkIndex(val) {
        if (val > reviews.length - 1) {
            return 0;
        } else if (val < 0) {
            return reviews.length - 1;
        } else {
            return val;
        }
    }

    function next() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }

    function prev() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    function random() {

        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber));

    }

    return (
        <div id="playArea">
            <Title></Title>
            <Tiles {...review} next={next} prev={prev} random={random} ></Tiles>
        </div>
    );
}