function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
}

function logOutPage() {
    var email = $('#email').val();
    console.log(email);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/email/validation',
        contentType : 'application/json',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        },
        data: JSON.stringify({
          "email": email,
          //백엔드에 보낸 데이터를 여기에 적어야 된다
        }),
        success : function(data){
          console.log(data);
        },
        error: function(request, status, error){
          console.log(status);
        }
    })
}
