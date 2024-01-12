import arrow from '/Vector.svg'
import BHC from '/Frame 22.png'
import star from '/star.png'
import Wla from '/찜.svg'
import order from '/주문내역.svg'
import main from '/메인화면.svg'
import my from '/My.svg'
import chat from '/bar-chart-2.svg'
import { Link, useNavigate } from 'react-router-dom'
import MAIN from "../css/main.module.css"
import memu from "../css/memu.module.css";
import find from "/Vector (1).svg"
import q from "/_.png"
import left_arrow from "/Union.svg"

const Memu = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const Back = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
    return(
    <>
    <header className={memu.header}>
      <form action="#" className={memu.form}>
        <div>
            <div onClick={Back}>
              <img src={`${left_arrow}`} alt="" />
            </div>
            <div>
              <label htmlFor="#">오늘 저녁은 이걸로</label>
              <img src={`${q}`} alt="#" />   
            </div> 
        </div>
        <div>
            <img src={`${find}`} alt="#" />
            <input type="text" placeholder="매장 또는 메뉴 입력" />
        </div>
      </form>
    </header>
    <main className={memu.main}>
        <div>
            <div>
                <div>
                    <p>전체</p>
                </div>
                <div>
                    <p>인기</p>
                </div>
                <div>
                    <p>한식</p>
                </div>
                <div>
                    <p>양식</p>
                </div>
                <div>
                    <p>일식</p>
                </div>
                <div>
                    <p>중식</p>
                </div>
                <div>
                    <p>편의</p>
                </div>
                <div>
                    <p>후식</p>
                </div>
            </div>
        </div>
      <div className={memu.q1}>
        <div className={memu.q1_main_arr}>
          <div className={memu.q1_main}>
                <div>
                <img src={`${BHC}`} alt="#" />
                <div>
                <div>
                    <div className={memu.q1_text}> 
                        <div>
                        <p>BHC 치킨</p>
                        <p>황금올리브 바삭바삭</p>
                        </div>
                        <div>
                        <div>
                            <div>
                            <img src={`${star}`} alt="#" />
                            <span>4.5(12)</span>
                            </div>
                            <div>
                            <img src={`${chat}`} alt="#" />
                            <span>380m</span>
                            </div>
                        </div>
                        <div>
                            <img src={`${Wla}`} alt="#" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </main>
    <footer className={MAIN.footer}> 
      <div>
      <div className={memu.bar}>
        <Link to="/"><img src={`${main}`} alt="#" /></Link>
        <Link to = "/Wla" ><img src={`${Wla}`} alt="#" /></Link>
        <Link to="/order"><img src={`${order}`} alt="#" /></Link>
        <Link to="/my"><img src={`${my}`} alt="#" /></Link>
      </div>
      <div className={memu.smart}>
      </div>
      </div>
    </footer>
    
    </>)
}

export default Memu