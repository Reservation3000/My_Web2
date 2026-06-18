import React from 'react';
import { useState } from 'react';
import './App.css'

import { XOutlined } from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { YoutubeOutlined } from '@ant-design/icons'

import {HomePageBackgroundImage} from "./components/component.jsx";

import {
  SocialButton,
  Navbar,
  ArtCard,
  ChooseCard,
  CarouselYT,
  MusicGameCardMainContent,
  MusicGameSidebar,
  TopNavbar,
} from "./components/component.jsx";

import{
  cardNumbe,
  ytList,
  socialLink,
}from "../modles/modle.jsx";


const iconMap = {
  XOutlined: <XOutlined />,
  InstagramOutlined: <InstagramOutlined />,
  FacebookOutlined: <FacebookOutlined />,
  YoutubeOutlined: <YoutubeOutlined />
};

function App() {
  

  const [Page, setPage] = useState('intro');
  const [getCard, setCard] = useState((null));
  const [getMusicGame, setMusicGame] = useState(ytList[0]);

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

            <img src={HomePageBackgroundImage} alt='background' className="background-image" />
          </div>
        )}


        {(Page === 'art') && (
          <>
            <div className="artContent">
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
              </div>
            </div>

            <div className={`bottom-navbar-card-musicGame ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
              <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
            </div>

          </div>

        )}

        {/* {(Page === 'about') && (

        )} */}


      <TopNavbar setPage={setPage} />

    </div>
      
  
  )
}


export default App