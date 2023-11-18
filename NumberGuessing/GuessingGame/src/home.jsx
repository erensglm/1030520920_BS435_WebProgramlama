import React from "react";
import {Link} from "react-router-dom";
export const Home = () => {
    return (
        <div>
            <h3 className={"heading"}>Sayı Tahmin Oyunu</h3>
            <p className={"welcome-text"}>Sayı Tahmin oyununa hoşgeldiniz.
            </p>
            <Link to="/match" className="play">Oyuna Başla</Link>
        </div>
    );
}