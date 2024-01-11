import { useNavigate } from "react-router-dom";
import sign from "../css/sgin.module.css"
import left_arrow from "/Union.svg"

const Sign = () => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const Back = () => {
      navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    return(
        <>
        <header className={sign.header}>
            <div>
                <img onClick={Back} src={`${left_arrow}`} alt="#" />
            </div>
            <div>
                <p>회원가입</p>
            </div>
            <div>
            </div>
        </header>
        <main className={sign.main}>
            <div className={sign.title}><p>아이디</p></div>
            <div>
                <div className={sign.login}>
                    <div>
                        <p>
                        아이디(이메일)  
                        </p>
                    </div>
                </div>
            </div>
            <div className={sign.title2}><p>비밀번호</p></div>
            <div>
                <div className={sign.login}>
                    <div>
                        <p>
                            비밀번호
                        </p>
                    </div>
                    <div>
                        <p>
                        비밀번호 확인
                        </p>
                    </div>  
                </div>
            </div>
            <div className={sign.fin}>
                <div onClick={sign}><p>회원가입</p></div>
            </div>
        </main>
        </>
    )
}

export default Sign