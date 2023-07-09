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

// 상품그룹 드롭다운
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
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    dropbtn_content.innerText = value;
    dropbtn_content.style.color = '#101010';
 }
}

window.onclick= (e)=>{
  if(!e.target.matches('.dropbtn_click')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
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