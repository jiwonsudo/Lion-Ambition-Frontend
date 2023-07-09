const modal = document.getElementById("modal-wrap");
const openModalBtn = document.getElementById("add-btn");
const openModalCard = document.getElementById("card-item");
const closeModalBtn = document.getElementById("close-btn");

// 모달창 열기
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 스크롤바 제거
});

openModalCard.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 스크롤바 제거
});

// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 스크롤바 보이기
});

function setThumbnail(event) {
  var reader = new FileReader();

  reader.onload = function(event) {
    var img = document.createElement("img-add");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#img-view").appendChild(img);
  };

  reader.readAsDataURL(event.target.files[0]);
}

window.onload=()=>{
  document.querySelector('.dropbtn_click').onclick = ()=>{
    dropdown();
  }
  document.getElementsByClassName('menu-list').onclick = ()=>{
    showMenu(value);
  }

dropdown = () => {
    var v = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn')
    v.classList.toggle('show');
  }

showMenu=(value)=>{
    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    dropbtn_icon.innerText = '';
    dropbtn_content.innerText = value;
    dropbtn_content.style.color = '#252525';
 }
}

window.onclick= (e)=>{
  if(!e.target.matches('.dropbtn_click')){
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}