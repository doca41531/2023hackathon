import { Link, useNavigate } from "react-router-dom"
import wla from '/찜 (1).svg'
import order from '/주문내역 (1).svg'
import main from '/메인화면.svg'
import my from '/My (1).svg'
import q from '/Group 5.svg'
import Main from "../css/main.module.css"
import MY from "../css/my.module.css";
import profile from "/Group 1.svg"
import left_arrow from "/Union.svg"

const My = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const Back = () => {
      navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    return(
        <>
        <header className={MY.header}>
            <div>
                <img onClick={Back} src={`${left_arrow}`} alt="#" />
            </div>
            <div>
                <p>MY 메뉴</p>
            </div>
            <div>

            </div>
        </header>
        <main className={MY.main}>
            <div>
                <div>
                    <img src={`${profile}`} alt="#" />
                    <p>로그인 하시겠습니까?</p>
                </div>
                <div>
                    <div>
                        <Link to="/order">
                            <img src={`${order}`} alt="#" />
                            <p>방문목록</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Wla">
                            <img src={`${wla}`} alt="#" />
                            <p>나의 찜</p>
                        </Link>
                    </div>
                    <div>   
                        <Link>
                            <img src={`${my}`} alt="#" />
                            <p>뭐 넣지</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="/Login">
                <div>
                    <p>로그인</p>
                </div>
            </Link>
        </main>
    {/* <footer className={Main.footer}> 
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
    </footer> */}
        </>
    )
}

export default My