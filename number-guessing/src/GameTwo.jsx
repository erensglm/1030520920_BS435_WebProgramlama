import { useState } from "react";

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getMessage(guess, rnd) {
    const guessNo = Number(guess);
    if (guessNo < rnd) return "Bilemedin ahmak daha yüksek bir tahminde bulun.";
    if (guessNo > rnd) return "Fazla uçuyorsun daha alçak bir tahmin yap.";
    if (guessNo === rnd) return "Nasıl olur! Kahretsin, bunu bilmeni beklemiyordum.";
}

function GameTwo() {
    const [guess, setGuess] = useState("");
    const [rnd, setRnd] = useState(getRandom(100));
    const [msg, setMsg] = useState("");
    const [count, setCount] = useState(0);

    const checkGuess = () => {
        setMsg(getMessage(guess, rnd));
        setCount((count) => count + 1);
    };

    const start = () => {
        setRnd(getRandom(100));
        setCount(0);
        setMsg("");
    };

    return (
        <form>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />
            {msg !== "Great!" ? (
                <button type="button" onClick={checkGuess}>
                    Tahminini görelim evlat.
                </button>
            ) : (
                <button type="button" onClick={start}>
                    Eğer cesaretin varsa bir daha oynarsın!
                </button>
            )}
            <div>{msg}</div>
            <div>{count} kere denedin üstüne toprak atmama ramak kaldı. </div>
        </form>
    );

}
export default GameTwo;
