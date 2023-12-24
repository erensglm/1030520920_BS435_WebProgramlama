import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import {Button, Col, Row} from "react-bootstrap";

function App() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const audioControls = {
        playbackRate: 1.0, volume: 1.0, muted: !isPlaying, loop: false,
    };

    return (<div className="App">
            <h2>KIDDO'NUN BUDALA MEZARLIGI</h2>
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/indir.jpg`}
                    alt="Resim"
                    style={{width: 1000, height: 500}}
                />
            </div>
            <Row>
                <Col>
                    <p className="welcome-text">
                        Budala Mezarligina hosgeldin evlat. Ben Kiddo!
                        Durmaksizin aylaklik yaptigin icin internetin en ucra kosesine geldin ve benim sinirlarim
                        icerisine girdin.
                        Burasi internet coplugunde yolunu kaybedenler, oyun oynamaktan kafasini kaldirmayanlar ve daha
                        niceleri icin bir mezarlik.
                        Bugune kadar nice bagimli buraya geldi ama cok azi burdan kurtulabildi. Sende onlar gibi benim
                        kurallarimla bazi oyunlar oynamak zorundasin
                        aksi takdirde adim Kiddo uzerine yemin ederim ki sonsuza kadar digerleri gibi burda çurumeye
                        mahkum olacaksin.
                        Fakat oyunlari oynayip kolayca kurtulabilecegini saniyorsan adim Kiddo kadar eminim ki budalasin
                        demektir ve burda kalmayi sonuna hak ediyorsun.
                        Bu oyunlari kazanmak asla kolay olmayacak ama bu demek degildir ki Kiddo alcakgonullu degildir.
                        Bunun bir gostergesi olarak oynamak istedigin oyunu secmene izin verecegim. Eger hazirsan
                        baslayalim degilsen de baslamak zorundasin cunku Kiddo seni sabaha kadar bekleyemez.
                    </p>
                </Col>
                <Col>
                    <Button onClick={() => navigate("GameOne")}>
                        Kiddo'nun Gaddar Sayı Tahmin Oyunu
                    </Button>
                    <Button onClick={() => navigate("GameTwo")}>
                        Kiddo'nun Zalim Sayı Tahmin Oyunu
                    </Button>
                </Col>
                <div
                    style={{
                        position: "fixed", bottom: "20px", right: "20px", zIndex: "1000",
                    }}
                >
                    <Button onClick={handlePlayPause}>
                        {isPlaying ? "Müziği Sustur" : "Müziği Aç"}
                    </Button>
                </div>
                <ReactAudioPlayer
                    src={`${process.env.PUBLIC_URL}/Audios/DoS.mp3`}
                    autoPlay={isPlaying}
                    controls
                    {...audioControls}
                />
            </Row>
        </div>);
}

export default App;
