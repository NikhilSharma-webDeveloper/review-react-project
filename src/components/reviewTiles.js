import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const Tiles = ({ id, name, job, image, text, next, prev, random }) => {
    return (<div id="reviewArea">
        <section id="imageContainer">
            <div className="iconArea"><FaQuoteRight className="icon" /></div>

            <img src={image} alt={name}></img>
        </section>
        <section id="nameAndJob">
            <h3>{name}</h3>
            <p>
                {job}
            </p>
            <p>
                {text}
            </p>
        </section>
        <section id="mover">
            <button className="btn" onClick={() => prev()}>
                <FaChevronLeft></FaChevronLeft>
            </button>
            <button className="btn" onClick={() => next()} >
                <FaChevronRight></FaChevronRight>
            </button>
        </section>
        <button className="btn random" onClick={() => random()}>
            Surprise me
        </button>
    </div >)
}