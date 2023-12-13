import './style.css';
import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, Col, Row} from "react-bootstrap";

function App() {
    const navigate = useNavigate()
    return (
        <div className="App">
            <h2>KİDDO'NUN BUDALA MEZARLIĞI</h2>
            <> <Row>
                <Col>
                    <p className="welcome-text">
                        Budala Mezarlığına hoşgeldin evlat. Ben Kiddo!
                        Durmaksızın aylaklık yaptığın için internetin en ücra köşesine geldin ve benim sınırlarım
                        içerisine girdin.
                        Burası internet çöplüğünde yolunu kaybedenler, oyun oynamaktan kafasını kaldırmayanlar ve daha
                        niceleri için bir mezarlık.
                        Bugüne kadar nice bağımlı buraya geldi ama çok azı burdan kurtulabildi. Sende onlar gibi benim
                        kurallarımla bazı oyunlar oynamak zorundasın
                        aksi takdirde adım Kiddo üzerine yemin ederim ki sonsuza kadar diğerleri gibi burda çürümeye
                        mahkum olacaksın.
                        Fakat oyunları oynayıp kolayca kurtulabileceğini sanıyorsan adım Kiddo kadar eminim ki budalasın
                        demektir ve burda kalmayı sonuna hak ediyorsun.
                        Bu oyunları kazanmak asla kolay olmayacak ama bu demek değildir ki Kiddo alçakgönüllü değildir.
                        Bunun bir göstergesi olarak oynamak istediğin oyunu seçmene izin vereceğim. Eğer hazırsan
                        başlayalım değilsen de başlamak zorundasın çünkü Kiddo seni sabaha kadar bekleyemez.
                    </p>
                </Col>
                <Col>
                    <button onClick={() => navigate("GameOne")}> Kiddo'nun Gaddar Sayı Tahmin Oyunu</button>
                    <button onClick={() => navigate("GameTwo")}> Kiddo'nun Zalim Sayı Tahmin Oyunu</button>
                </Col>
            </Row>
            </>
        </div>
    );

}

export default App;
