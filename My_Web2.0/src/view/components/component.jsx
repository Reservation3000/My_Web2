import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';
import { Carousel } from 'antd';

export function SocialButton({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button className="communityButtom" size="medium" icon={icon} />
    </a>
  );
}

export function Navbar({ contentName, content }) {
  return (
    <div className={contentName}>
      {content}
    </div>
  );
}


export function ArtCard({ cardNumber, setCard }) {
  return (
    <Row gutter={[16, 10]}>
      {cardNumber.map(cardTitle => (
        <Col span={6} key={cardTitle.id}>

          <Card className="artCard"
            title={cardTitle.title}
            variant="outlined"
            size="small"
            hoverable
            onClick={() => setCard(cardTitle)}
          >
            <img className="artPictureSize"
              src={cardTitle.img}
              alt={cardTitle.title}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export function ChooseCard({setCard , getCard}){
  return (
    <>
      <button className="close-button"
          onClick={() => setCard(null)}
      >
        <CloseSquareOutlined />  {/* 叉叉icon */}
      </button>

      <div
        onClick={(e) => e.stopPropagation()} 
        //   style={{
        //     width: '100%',
        //     maxWidth: '800px',
        // }}
      >
        <Card
          title={getCard.title}
            variant={false}
            hoverable
            styles={{
              header: { fontSize: '24px', fontWeight: '300' },
              body: {
                padding: '20px',              // 邊界距
                fontSize: '16px',             // 文字大小
                color: 'black',               // 文字顏色
                backgroundColor: '#fafafa', 
                marginBottom: '10px'          // 下外距
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
    </>
  );
}

export function CarouselYT({setMusicGame , ytList}){
  return(
    <div className="carouselYT">

      <p className="musicGameH1Title">早安，您今天，<br />做專題了嗎？</p>
      <p className="musicGameHContest">專題不會自己動喔~</p>            
        <Carousel arrows autoplay>
          {ytList.map((item) => (
            <div key={item.id} onClick={() => setMusicGame(item)}>
              <img src={item.img} className="carousel-img" />
            </div>
          ))}
        </Carousel>

    </div>
  );
}


export function MusicGameCardMainContent({getMusicGame}){
  return(
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
  );
}

export function MusicGameSidebar({ ytList, setMusicGame }) {
  return (
    <List
      className="ytListClass"
      dataSource={ytList}
      renderItem={(item) => (
        <List.Item
          className="ytList"
          onClick={() => setMusicGame(item)}
          style={{ cursor: "pointer" }}
        >
          <List.Item.Meta
            avatar={
              <img
                className="ytListPicture"
                src={item.img}
                alt={item.title}
              />
            }
            title={
              <div style={{ textAlign: "left", fontWeight: 300, fontSize: 18 }}>
                {item.title}
              </div>
            }
            description={
              <div
                style={{
                  textAlign: "left",
                  fontWeight: 400,
                  fontSize: 10,
                  wordBreak: "break-all",
                }}
              >
                {item.constents}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
}

export function TopNavbar({setPage}){
  return(
    <>
      <div className="top-navbar">
        <span className="title">Reservation</span>
      </div>

      <div className="tabs">
        <Tabs defaultActiveKey="1" size="large"
          onChange={(key) => {
            if (key === "1") setPage('intro');
            if (key === "2") setPage('art');
            if (key === "3") setPage('musicGame');
            if (key === "4") setPage('about');
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
  );
}

