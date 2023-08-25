function onclickLogin(){
    fetch('http://127.0.0.1:8000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@likelion.org',
        password: '0000',
      }),
    })
    .then((response) => {
      if (response.status === 400) {
        throw new Error('400 에러 발생: Bad Request');
      } else if (response.status === 401) {
        throw new Error('401 에러 발생: Unauthorized');
      } else if (response.status === 429) {
        throw new Error('429 에러 발생: Too Many Requests');
      }
      console.log('SUCCESS', response);
      window.location.href='manage'
    })
    .catch((error) => console.log('ERROR', error));
}