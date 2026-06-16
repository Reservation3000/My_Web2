import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { List } from 'antd';

import { XOutlined } from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { YoutubeOutlined } from '@ant-design/icons'
import { CloseSquareOutlined } from '@ant-design/icons'

import { Tabs } from 'antd';
import './App.css'

import frontPageBackGround from '../assets/frontPageBackGround.jpg'
import bear from '../assets/bear.jpg'
import PanYinhu from '../assets/PanYinhu.jpg'
import picture3 from '../assets/picture3.jpg'
import picture4 from '../assets/picture4.jpg'
import the2025 from '../assets/2025.jpg'
import musicGame from '../assets/musicGame.jpg'
import quadrant from '../assets/quadrant.jpg'
import goldenRetriever from '../assets/goldenRetriever.jpg'
import practice14 from '../assets/practice14.jpg'
import tract from '../assets/tract.jpg'
import { Card, Col, Row } from 'antd';

import electronAnnihilation from '../assets/videoPreview/electronAnnihilation.jpg'
import rominate from '../assets/videoPreview/rominate.jpg'
import photonLeap from '../assets/videoPreview/photonLeap.png'
import lineminator from '../assets/videoPreview/lineminator.png'

import { Carousel } from 'antd';

const cardNumbe = [
  { id: 1, title: '2026STYLE', img: frontPageBackGround, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 2, title: 'Bear at the construction site', img: bear, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 3, title: 'Pan Yinhu', img: PanYinhu, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 4, title: 'Texas Shepherd', img: picture3, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 5, title: 'May I have your drink?', img: picture4, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 6, title: '2025', img: the2025, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 7, title: 'music Game', img: musicGame, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 8, title: 'Quadrant', img: quadrant, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 9, title: 'golden Retriever', img: goldenRetriever, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 10, title: 'practice14', img: practice14, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' },
  { id: 11, title: 'tract', img: tract, content: 'hfeaehrstjsnxyjbvcxshshqghhadq' }
];

const ytList = [
  { id: 1, title: 'lineminator', yturl: 'https://www.youtube.com/embed/YPcBJeGuarY', img: lineminator, constents: "fvdfdddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssddddddddddag" },
  { id: 2, title: '電子湮滅', yturl: 'https://www.youtube.com/embed/s6FyzwbYmZY?si=ezUR4HI-R679OOo6', img: electronAnnihilation, constents: "twhntrsbrt" },
  { id: 3, title: 'rominator', yturl: 'https://www.youtube.com/embed/wtM0RNU1NPU', img: rominate, constents: "wetrbsfdvr4w3rgsebfdvarevr" },
  { id: 4, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "aergafvdv" },
  { id: 5, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "earvfzdvsfv" },
  { id: 6, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "erbaszbfebesbgteshgesheh" },
  { id: 7, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "aerbaves" },
  { id: 8, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "esrbsebte" },
  { id: 9, title: '光子躍進', yturl: 'https://www.youtube.com/embed/TaA16s24hOQ', img: photonLeap, constents: "twba" }
];

const socialLink = [
  { id: 1, icon: 'XOutlined', url: 'https://x.com/reservation_art' },
  { id: 2, icon: 'InstagramOutlined', url: 'https://www.instagram.com/reservation_furry?igsh=MzFpNTJxZG1odGo0&utm_source=qr' },
  { id: 3, icon: 'FacebookOutlined', url: 'https://www.facebook.com/share/1GgosEsxrT/?mibextid=wwXIfr' },
  { id: 4, icon: 'YoutubeOutlined', url: 'https://www.youtube.com/@user-reservation/videos?view=0&sort=dd&shelf_id=2' }
]

const iconMap = {
  XOutlined: <XOutlined />,
  InstagramOutlined: <InstagramOutlined />,
  FacebookOutlined: <FacebookOutlined />,
  YoutubeOutlined: <YoutubeOutlined />
};


function App() {

  const [Page, setPage] = useState('intro');
  const [getCard, setCard] = useState((null));
  const [getMusicGame, setGetMusicGame] = useState(ytList[0]);

  return (
    <>
      <div className='app'>
        {(Page === 'intro') && (
          <>
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

            <img src={frontPageBackGround} alt='background' className="background-image" />
          </>
        )}


        {Page === 'art' && (
          <>
            <div className="artContent">
              <Row gutter={[16, 10]}>
                {cardNumbe.map(cardTitle => (
                  <Col span={6} key={cardTitle.id}>
                    <Card className="artCard" title={cardTitle.title}
                      variant="outlined"
                      size="small"
                      hoverable
                      onClick={() => setCard(cardTitle)}
                      styles={{
                        fontSize: '24px',
                        color: "rgb(0, 0, 0)",
                        fontWeight: "300"
                      }}>
                      <img className="artPictureSize" src={cardTitle.img} alt={cardTitle.title} />
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className={`bottom-navbar-card ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
                <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
              </div>
            </div>

            <div>
              {getCard && (
                <div className="overlay">

                  <button
                    className="close-button"
                    onClick={() => setCard(null)}
                  >
                    <CloseSquareOutlined />
                  </button>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: '100%',
                      maxWidth: '800px',
                    }}
                  >
                    <Card
                      title={getCard.title}
                      variant={false}
                      hoverable
                      styles={{
                        header: { fontSize: '24px', fontWeight: '300' },
                        body: {
                          padding: '20px',          // 設定內距
                          fontSize: '16px',         // 設定文字大小
                          color: 'black',             // 設定文字顏色
                          backgroundColor: '#fafafa', // 檢查區域範圍用
                          marginBottom: '10px'
                        }
                      }}
                    >
                      <img className="choseThePicture"
                        src={getCard.img}
                        alt={getCard.title}
                        style={{ width: '100%', display: 'block' }}
                      />
                      <div style={{ marginTop: '20px' }}>
                        <h2 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{getCard.title}</h2>
                        <p style={{ color: '#888', margin: 0 }}>{getCard.content}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </>
        )}



        {Page === 'musicGame' && (
          <div className="musicGameBacjground">
            <div className="carouselYT">
              <p className="musicGameH1Title">早安，您今天，<br />做專題了嗎？</p>
              <p className="musicGameHContest">專題不會自己動喔~</p>
              <Carousel
                arrows
                autoplay
              >
                {ytList.map((cardTitle) => (
                  <div key={cardTitle.id} onClick={() => setGetMusicGame(cardTitle)}>
                    <img src={cardTitle.img} className="carousel-img" />
                  </div>
                ))}
              </Carousel>

            </div>

            <div className="musicGamePage">
              <div className="musicGameCard">
                <Col span={15}>
                  <Card className='ytCardSize'
                    title={getMusicGame.title}
                    variant={false}
                    styles={{
                      header: { fontSize: '24px', fontWeight: '300' },
                      body: {
                        padding: '20px',          // 設定內距
                        fontSize: '16px',         // 設定文字大小
                        color: 'black',             // 設定文字顏色
                        backgroundColor: '#fafafa', // 檢查區域範圍用
                        marginBottom: '10px'
                      }
                    }}
                  >
                    <div className="video-wrapper" id="sectionVideo">
                      <iframe
                        width="100%" height="100%"
                        src={getMusicGame.yturl} title={getMusicGame.title}
                        frameborder="0"
                        allow="accelerometer; 
                          autoplay; clipboard-write; 
                          encrypted-media; gyroscope; 
                          picture-in-picture"
                        allowFullScreen
                      >
                      </iframe>
                    </div>
                  </Card>
                </Col>

                <div >
                  <List className="ytListClass"
                    dataSource={ytList}
                    renderItem={item => (
                      <List.Item className="ytList"
                        onClick={() => setGetMusicGame(item)} // 點擊整列都會觸發狀態更新
                        style={{ cursor: 'pointer' }}         // 增加滑鼠指標，提示用戶可點擊      
                      >
                        <List.Item.Meta
                          avatar={
                            <img className="ytListPicture" src={item.img} alt={item.title} />
                          }
                          title={<a style={{ display: 'block', textAlign: 'left', fontWeight: '300', fontSize: '18px' }}> {item.title} </a>
                          }
                          description={<p style={{ display: 'block', textAlign: 'left', fontWeight: '400', fontSize: '10px', wordBreak: 'break-all' }}>{item.constents}"</p>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </div>



            </div>

            <div className={`bottom-navbar-card-musicGame ${Page !== 'intro' ? 'fixed-footer' : ''}`}>
              <span className="statement">© 2026 保留 - Reservation. All rights reserved.</span>
            </div>

          </div>

        )}


      </div>
      <div className="top-navbar">
        <span className="title">Reservation</span>
      </div>

      <div className="tabs">
        <Tabs defaultActiveKey="1" size="large"
          onChange={(key) => {
            if (key === "1") setPage('intro');
            if (key === "2") setPage('art');
            if (key === "3") setPage('musicGame');
            if (key === "4") setPage('About');
          }}
          items={[
            { key: "1", label: "Intro" },
            { key: "2", label: "Art" },
            { key: "3", label: "Music game" },
            { key: "4", label: "About" },
          ]}
        />
      </div>
    </>
  )
}

function SocialButton({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button className="communityButtom" size="medium" icon={icon} />
    </a>
  );
}

function Navbar({ contentName, content }) {
  return (
    <div className={contentName}>
      {content}
    </div>
  );
}



export default App