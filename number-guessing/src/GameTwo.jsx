import React, { useState } from "react";

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMessage(guess, target) {
    const guessNo = Number(guess);
    if (guessNo < target) return "Bilemedin ahmak daha yüksek bir tahminde bulun.";
    if (guessNo > target) return "Fazla uçuyorsun daha alçak bir tahmin yap.";
    if (guessNo === target) return "Kahretsin! Kiddo'yu kendi oyununda alt ettin. Seni özgür bırakacağım ama burdan kaçtın diye benden kurtulduğunu sanıyorsan yanılıyorsun! ";
}

function GameTwo() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [guess, setGuess] = useState("");
    const [target, setTarget] = useState(null);
    const [msg, setMsg] = useState("");
    const [count, setCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const startGame = () => {
        setTarget(getRandom(min, max));
        setCount(0);
        setMsg("");
        setGameOver(false);
    };

    const activateGame = () => {
        if (min < max) {
            startGame();
        } else {
            setMsg("Lütfen geçerli bir sayı aralığı belirtin.");
        }
    };

    const checkGuess = () => {
        const guessNo = Number(guess);
        if (count < 2 && !gameOver) {
            setCount((count) => count + 1);
            setMsg(getMessage(guess, target));
            if (guessNo === target) {
                setGameOver(true);
            }
        } else {
            setMsg("Ahmak, benim oyunumda beni yeneceğini mi sanıyordun? ");
            setGameOver(true);
        }
    };

    return (
        <form>
            <label>
                Min Sayı:
                <input
                    type="number"
                    value={min}
                    onChange={(e) => setMin(Number(e.target.value))}
                />
            </label>
            <label>
                Max Sayı:
                <input
                    type="number"
                    value={max}
                    onChange={(e) => setMax(Number(e.target.value))}
                />
            </label>
            <button type="button" onClick={activateGame}>
                Seni mahkum edecek sayıları seçtiysen başlayalım!
            </button>
            <br />
            {target !== null && (
                <>
                    <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    {gameOver ? (
                        <button type="button" onClick={startGame}>
                            Benim oyunumu tekrar tekrar oynayabilirsin ama her kaybettiğinde klavyendeki bir tuşu bozacağım!
                        </button>
                    ) : (
                        <>
                            <button type="button" onClick={checkGuess}>
                                Tahminini görelim evlat.
                            </button>
                            <div>{count} kere denedin seni hapsetmeme az kaldı.</div>
                        </>
                    )}
                    <div>{msg}</div>
                </>
            )}
        </form>
    );
}

export default GameTwo;
