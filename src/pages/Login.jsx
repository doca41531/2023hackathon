import { Link, useNavigate } from "react-router-dom"
import wla from '/찜 (1).svg'
import order from '/주문내역 (1).svg'
import main from '/메인화면.svg'
import my from '/My (1).svg'
import login from "../css/Login.module.css"
import left_arrow from "/Union.svg"
import find from "/Vector (1).svg"
import q from "/_.png"

const Login = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const Back = () => {
      navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };
    return(
        <>
        <header className={login.header}>
            <div>
                <img onClick={Back} src={`${left_arrow}`} alt="#" />
            </div>
            <div>
                <p>로그인</p>
            </div>
            <div>
            </div>
        </header>
        <main className={login.main}>
            <div className={login.title}><p>로그인</p></div>
            <div>
                <div className={login.login}>
                    <div>
                        <p>
                        아이디(이메일)
                        </p>
                    </div>
                    <div>
                        <p>
                        비밀번호
                        </p>
                    </div>  
                </div>
                <div className={login.vusdml}>
                    <div>
                        <div></div>
                        <p>아이디 저장</p>
                    </div>
                    <div>
                        <div></div>
                        <p>자동 로그인</p>
                    </div>
                </div>
            </div>
            <div className={login.fin}>
                <div><p>로그인</p></div>
                <div><Link to="/sign"><p>회원가입</p></Link></div>
            </div>
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

export default Login