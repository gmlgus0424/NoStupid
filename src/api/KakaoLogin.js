

const KakaoLogin=()=>{
  const CLIENT_ID=`${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI =`${process.env.REACT_REDIRECT_URI}`;
  const kakaoURL= `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`



return(
  <img
    alt= "kakao"
    src="../assets/icon/kakao.png"
    onClick={()=> Window.location.href= kakaoURL}
    
    />
)


}

export default KakaoLogin;