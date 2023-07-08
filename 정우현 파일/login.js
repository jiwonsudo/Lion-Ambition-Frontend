window.Kakao.init("cb9f015babbf4fae5b5122ed653fd52f");
function KakaoLogin() {
    window.Kakao.Auth.login({
        scope:'profile, account_email',
        success: function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                }
            });
        }
    });
}