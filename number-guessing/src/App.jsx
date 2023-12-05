import './style.css';
import GameOne from "./GameOne";
import {useNavigate} from "react-router-dom";
import React from "react";

function App() {
    const navigate = useNavigate()
  return (
    <div className="App">
        <h2>SAYI TAHMİN OYUNU</h2>
        <p className="welcome-text">
            Budala Mezarlığına hoşgeldin evlat. Ben X.
            Durmaksızın aylaklık yaptığın için internetin en ücra köşesine geldin ve benim sınırlarım içerisine girdin.
            Burası internet çöplüğünde yolunu kaybedenler, oyun oynamaktan kafasını kaldırmayanlar ve daha niceleri için bir mezarlık.
            Bugüne kadar nice bağımlı buraya geldi ama çok azı burdan kurtulabildi. Sende onlar gibi benim kurallarımla bazı oyunlar oynamak zorundasın
            aksi takdirde adım X üzerine yemin ederim ki sonsuza kadar diğerleri gibi burda çürümeye mahkum olacaksın.
            Fakat oyunları oynayıp kolayca kurtulabileceğini sanıyorsan adım X kadar eminim ki budalasın demektir ve burda kalmayı sonuna hak ediyorsun.
            Bu oyunları kazanmak asla kolay olmayacak ama bu demek değildir ki X alçakgönüllü değildir.
            Bunun bir göstergesi olarak oynamak istediğin oyunu seçmene izin vereceğim. Eğer hazırsan başlayalım değilsen de başlamak zorundasın çünkü X seni sabaha kadar bekleyemez.

        </p>
        <button onClick={()=>navigate("GameOne")}> Oyun 1</button>
        <button onClick={()=>navigate("GameTwo")}> Oyun 2</button>

    </div>
  );

}

export default App;
