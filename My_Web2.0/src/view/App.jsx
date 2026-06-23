import React from 'react';
import { useState } from 'react';
import './App.css'

import { XOutlined } from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { YoutubeOutlined } from '@ant-design/icons'

import {
  SocialButton,
  Navbar,
  ArtCard,
  ChooseCard,
  CarouselYT,
  MusicGameCardMainContent,
  MusicGameSidebar,
  MusicGameContect,
  TopNavbar,
  CharacterButton,
  ShowCharacters
} from "./components/component.jsx";

import {
  cardNumbe,
  ytList,
  socialLink,
  HomePageBackgroundImage,
  characters,
} from "../modles/modle.jsx";


const iconMap = {
  XOutlined: <XOutlined />,
  InstagramOutlined: <InstagramOutlined />,
  FacebookOutlined: <FacebookOutlined />,
  YoutubeOutlined: <YoutubeOutlined />,
};

function App() {


  const [Page, setPage] = useState('intro');
  const [getCard, setCard] = useState((null));
  const [getMusicGame, setMusicGame] = useState(ytList[0]);
  const [getCharactersButton, setCharactersButton] = useState(characters[0]);

  return (
    <div className='app'>

      {(Page === 'intro') && (
        <div>
          <div className="mask"> </div>
          <div className={`bottom-navbar ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
            <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
          </div>

          <div className="wordCard">
            <Navbar contentName="introduceTitle" content="保留_Reservation" />
            <Navbar contentName="introduceText" content={<>
              不是動詞，創作各種藝術作品不限於獸繪，總之學的有點雜。<br />
              主要圍繞 音遊/互動/獸人 創作，目前努力學習網頁架構中...</>
            } />

            <div className="button-group">
              {socialLink.map((item) => (
                <SocialButton
                  key={item.id}
                  url={item.url}
                  icon={iconMap[item.icon]}
                />
              ))}
            </div>

          </div>

          <img src={HomePageBackgroundImage.img} alt='background' className="background-image" />
        </div>
      )}


      {(Page === 'art') && (
        <>
          <div className="artContent" >
            <ArtCard cardNumber={cardNumbe} setCard={setCard} />
            <div className={`bottom-navbar-card ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
              <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
            </div>
          </div>

          <div>
            {getCard && (
              <div className="overlay">
                <ChooseCard setCard={setCard} getCard={getCard} />
              </div>
            )}
          </div>
        </>
      )}



      {(Page === 'musicGame') && (
        <div className="musicGameBacjground">
          <CarouselYT setMusicGame={setMusicGame} ytList={ytList} />

          <div className="musicGamePage">
            <div className="musicGameCard">
              <MusicGameCardMainContent getMusicGame={getMusicGame} />
              <MusicGameSidebar ytList={ytList} setMusicGame={setMusicGame} />
              <MusicGameContect getMusicGame={getMusicGame} />
            </div>
          </div>

          <div className={`bottom-navbar-card-musicGame ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
            <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
          </div>

        </div>

      )}

      {(Page === "about") && (
        <>
          <div className="about-page-container">
            <div style={{ display: "flex", flexDirection: "column", position: "relative", minHeight: "100vh", width: "100vw", backgroundColor: "rgb(227, 228, 232)", overflow: "hidden", boxSizing: "border-box" }}>
              <CharacterButton charactersButton={characters} setCharactersButton={setCharactersButton} />
              <ShowCharacters getCharactersButton={getCharactersButton} />
            </div>

            <div className="bottom-navbar-card-about">
              <span className="statement">
                © 2026 保留 - Reservation. All rights reserved.
              </span>
            </div>
          </div>
        </>
      )}

      {(Page === "commision") && (
        <>
          <div className="commisionBackground">
            <h1 className="stayTnuedText">Stay tuned</h1>

            <div className="bottom-navbar-card-about">
              <span className="statement">
                © 2026 保留 - Reservation. All rights reserved.
              </span>
            </div>
          </div>
        </>
      )}


      <TopNavbar setPage={setPage} />
    </div>
  )
}


export default App