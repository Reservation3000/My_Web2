import { Button } from 'antd'
import { XOutlined } from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import { YoutubeOutlined } from '@ant-design/icons'
import './App.css'

import frontPageBackGround from '../assets/frontPageBackGround.jpg'

function App() {
  return (
    <>
      <div className='app'>
        
        <div className="top-navbar">
          <span className="title">Reservation</span>
        </div>

        <div className="mask">
        </div>

        <div className="bottom-navbar" >
          <span className="statement">© 2024 保留 - Reservation. All rights reserved.</span>
        </div>

        <div className="wordCard">
          <div className="introduceTitle">保留_Reservation</div>

          <div className="introduceText">
            不是動詞，創作各種藝術作品不限於獸繪，總之學的有點雜。<br />
            主要圍繞 "音遊/互動/獸人" 創作，目前努力學習網頁架構中...
          </div>

          <div className="button-group">
            <SocialButton url="https://x.com/reservation_art" icon={<XOutlined />} />
            <SocialButton url="https://www.instagram.com/reservation_furry?igsh=MzFpNTJxZG1odGo0&utm_source=qr" icon={<InstagramOutlined />} />
            <SocialButton url="https://www.facebook.com/share/1GgosEsxrT/?mibextid=wwXIfr" icon={<FacebookOutlined  />} />
            <SocialButton url="https://www.youtube.com/@user-reservation/videos?view=0&sort=dd&shelf_id=2" icon={<YoutubeOutlined />} />
          </div>

        </div>

        <img src={frontPageBackGround} alt='background' className="background-image"  />
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




export default App