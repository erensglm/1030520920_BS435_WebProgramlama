import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMessage(guess, target) {
    const guessNo = Number(guess);
    if (guessNo < target) return "Bilemedin ahmak daha yüksek bir tahminde bulun.";
    if (guessNo > target) return "Fazla uçuyorsun daha alçak bir tahmin yap.";
    if (guessNo === target) return `Kahretsin! Cevap ${target} ve doğru bilerek Kiddo'yu kendi oyununda alt ettin. Seni özgür bırakacağım ama burdan kaçtın diye benden kurtulduğunu sanıyorsan yanılıyorsun!`;
}

function GameTwo() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [guess, setGuess] = useState("");
    const [target, setTarget] = useState(null);
    const [msg, setMsg] = useState("");
    const [count, setCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const navigate = useNavigate(); // useNavigate hook'u

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        let timer;
        if (timeLeft > 0 && !gameOver) {
            timer = setTimeout(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && !gameOver) {
            setGameOver(true);
            setMsg(`Süre doldu! Cevap ${target} ve sen kaybettin.`);
        }

        return () => clearTimeout(timer);
    }, [timeLeft, gameOver, target]);

    const startGame = () => {
        const newTarget = getRandom(min, max);
        setTarget(newTarget);
        setCount(0);
        setMsg("");
        setGameOver(false);
        setTimeLeft(30);
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
        if (!gameOver) {
            setCount((count) => count + 1);
            setMsg(getMessage(guess, target));
            if (guessNo === target) {
                setGameOver(true);
            }
        }
    };


    const goToApp = () => {
        navigate("/");
    };

    return (<div className="game-container">


            <h1>Kiddo'nun Gaddar Sayı Tahmin Oyunu</h1>


            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/indir.jpg`}
                    alt="Resim"
                    style={{width: 400, height: 200}}
                />
            </div>
            <p>
                Kiddo seni kendi Gaddar sayı tahmin oyununa davet ediyor. Bu modda sayıyı tahmin etmek için
                sınırsız hakkın var ama sadece 30 saniye içinde sayıyı bulman lazım! <br/>
                Kiddo senin yerine otomatik olarak 1-100 arasındaki sayıları seçti.
                İstersen hemen oynamaya başlayabilir veya kendin bir aralık seçebilirsin.
                <br/>
                Eğer Kiddo'yu kızdırmak istemiyorsan hemen başla! <br/>

            </p>

            <p> Kalan süre {timeLeft} saniye </p>
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button type="button" onClick={activateGame}>
                        Seni mahkum edecek sayıları seçtiysen başlayalım!
                    </button>
                    {/* Yönlendirme Butonu */}
                    <button type="button" onClick={goToApp}>
                        Eğer diğer oyunu görmek istersen Ana Sayfaya Git
                    </button>
                </div>


                {target !== null && (<>
                        <input
                            type="number"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                        />
                        {gameOver ? (<button type="button" onClick={startGame}>
                                Benim oyunumu tekrar tekrar oynayabilirsin ama her kaybettiğinde
                                klavyendeki bir tuşu bozacağım!
                            </button>) : (<>
                                <button type="button" onClick={checkGuess}>
                                    Tahminini görelim evlat.
                                </button>
                                <div>{count} kere denedin seni hapsetmeme az kaldı.</div>
                            </>)}
                        <div>{msg}</div>
                    </>)}
            </form>

        </div>);
}

export default GameTwo;
