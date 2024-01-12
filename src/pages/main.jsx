import PopularityLogo from '/인기.png'
import AllLogo from '/전체.png'
import KLogo from '/한식.png'
import ALogo from '/양식.png'
import JLogo from '/해산물.png'
import ExpediencyLogo from '/편의점.png'
import CLogo from '/image 2.png'
import simpleLogo from '/디저트.png'
import arrow from '/Vector.svg'
import BHC from '/Frame 22.png'
import star from '/star.png'
import Wla from '/찜.svg'
import order from '/주문내역.svg'
import main from '/메인화면.svg'
import q from "/_.png"
import find from "/Vector (1).svg"
import my from '/My.svg'
import chat from '/bar-chart-2.svg'
import { Link } from 'react-router-dom'
import MAIN from "../css/main.module.css"
import styles from "../css/style.module.css";
import memu from "../css/memu.module.css";

const Main = () => {
    return(
    <>
    <header className={styles.header}>
      <form action="#" className={styles.form}>
        <div>
            <label htmlFor="#">오늘 저녁은 이걸로</label>
            <img src={`${q}`} alt="#" />    
        </div>
        <div>
            <img src={`${find}`} alt="#" />
            <input type="text" name='memu' placeholder="매장 또는 메뉴 입력" />
        </div>
      </form>
    </header> 
    <main className={styles.main}>
      <div className={styles.memu}>
        <div>
          <Link to="/memu">
            <div>
              <img src={`${PopularityLogo}`} alt="#" />
              <p>인기</p>
            </div>
          </Link>
          <Link to="/memu">
          <div>
          <img src={`${JLogo}`} alt="#" />
          <p>일식</p>
          </div>
          </Link>
        </div>
        <div>
          <Link to="/memu">
          <div>
          <img src={`${AllLogo}`} alt="#" />
          <p>전체</p> 
          </div>
          </Link>
          <Link to="/memu">
          <div>
          <img src={`${CLogo}`} alt="#" />
          <p>중식</p>
          </div>
          </Link>
        </div>
        <div>
          <Link to="/memu">
          <div>
          <img src={`${KLogo}`} alt="#" />
          <p>한식</p>
          </div>
          </Link>
          <Link to="/memu">
          <div>
          <img src={`${ExpediencyLogo}`} alt="#" />
          <p>편의</p>
          </div>
          </Link>
        </div>
        <div>
          <Link to="/memu">
          <div>
          <img src={`${ALogo}`} alt="#" />
          <p>양식</p>
          </div>
          </Link>
          <Link to="/memu">
          <div>
          <img src={`${simpleLogo}`} alt="#" />
          <p>후식</p>
          </div>
          </Link>
        </div>
      </div>
      <div className={styles.q1}>
        <div>
          <span>이런 가게는 어때요?</span>
          <span><img src={`${arrow}`} alt="#" /></span>
        </div>
        <div className={styles.q1_main_arr}>
          <div className={styles.q1_main}>
            <div>
              <img src={`${BHC}`} alt="#" />
              <div>
                <div>
                    <div className={styles.q1_text}> 
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
      <div className={styles.q1}>
        <div>
          <span>오늘 인기 있는 매장</span>
          <span><img src={`${arrow}`} alt="#" /></span>
        </div>
        <div className={styles.q1_main_arr}>
          <div className={styles.q1_main}>
            <div>
              <img src={`${BHC}`} alt="#" />
              <div>
                <div>
                    <div className={styles.q1_text}> 
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
      <div className={styles.bar}>
        <Link to="/"><img src={`${main}`} alt="#" /></Link>
        <Link to = "/Wla" ><img src={`${Wla}`} alt="#" /></Link>
        <Link to="/order"><img src={`${order}`} alt="#" /></Link>
        <Link to="/my"><img src={`${my}`} alt="#" /></Link>
      </div>
      <div className={styles.smart}>
      </div>
      </div>
    </footer>
    </>)
}

export default Main