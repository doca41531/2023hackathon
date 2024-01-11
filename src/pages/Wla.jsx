import { Link } from "react-router-dom"
import wla from '/찜.svg'
import order from '/주문내역.svg'
import main from '/메인화면.svg'
import my from '/My.svg'
import q from '/Group 5.svg'
import Main from "../css/main.module.css"
import styles from "../css/style.module.css";
import memu from "../css/memu.module.css";
import find from "/Vector (1).svg"
import q2 from "/_.png"

const Wla = () => {
    return(
        <>
        <header className={memu.header}>
          <form action="#" className={memu.form}>
            <div>
                <label htmlFor="#">오늘 저녁은 이걸로</label>
                <img src={`${q2}`} alt="#" />    
            </div>
            <div>
                <img src={`${find}`} alt="#" />
                <input type="text" placeholder="매장 또는 메뉴 입력" />
            </div>
          </form>
        </header>
        <main className={Main.main}>
            <div>
                <div>
                    <img src={`${q}`} alt="#" />
                    <p>찜한 가게가 없어요!</p>
                </div>
                <div>
                    <p>찜하러 가기</p>
                </div>
            </div>
        </main>
    <footer className={Main.footer}> 
      <div>
      <div className={styles.bar}>
        <Link to="/"><img src={`${main}`} alt="#" /></Link>
        <Link to = "/Wla" ><img src={`${wla}`} alt="#" /></Link>
        <Link to="/order"><img src={`${order}`} alt="#" /></Link>
        <Link to="/my"><img src={`${my}`} alt="#" /></Link>
      </div>
      <div className={styles.smart}>
      </div>
      </div>
    </footer>
        </>
    )
}

export default Wla