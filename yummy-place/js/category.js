//////////////////////////////////////////////////////////////////////////
// DATABASE
var CategoryList = {
  한식: ["김치찌개", "불고기", "비빔밥", "삼겹살", "치킨", "냉면"],
  양식: ["피자", "파스타", "스테이크", "햄버거"],
  중식: ["짜장면", "짬뽕", "마라탕", "양꼬치"],
  일식: ["초밥", "우동", "소바", "덮밥"],
  분식: ["떡볶이", "김밥", "라면", "만두"],
};

//////////////////////////////////////////////////////////////////////////

class Category {
  // 음식 종류(한식. 양식 . 중식 등)에 따라 음식 목록(치킨. 피자 등..) 저장
  // 음식 목록 보여주기.
  constructor(name, list) {
    this._name = name;
    this._foodList = list;
  }

  get name() {
    return this._name;
  }

  get foodList() {
    return this._foodList;
  }

  addFood(newFood) {
    this._foodList.push(newFood);
  }
}


function searchYoutubeRecipe(name) {
  //location.href('https://www.youtube.com/results?search_query='+name);
  window.open('https://www.youtube.com/results?search_query=' + name);
}

function searchNaverMap(name) {
  //location.href = 'https://map.naver.com/v5/search/' + name + '?c=15,0,0,0,dh';
  window.open('https://map.naver.com/v5/search/' + name + '?c=15,0,0,0,dh');
}



//////////////////////////////////////////////////////////////////////////
// category.html
function loadButton() {
  var btns = document.getElementsByTagName('Button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].innerText = btns[i].value;
  }
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  // Get all elements with class="tab-btn" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  //viewTab(evt.currentTarget, tabName);
}

function viewTab(btn, tabName) {
  var tab = document.getElementById(tabName);
  tab.innerHTML = "<h2>" + btn.value + "</h2>"
}

function selectSubCategory() {
  let uls = document.querySelectorAll('ul');
  uls.forEach(ul => {
    ul.addEventListener("click", function (e) {
      if (e.target && (e.target.nodeName == "LI" || e.target.nodeName == "A")) {
        console.log(e.target.innerText);
        localStorage.setItem("category", e.target.innerText);
        location.href = 'subCategory.html';
      }
    });
  });
}

//////////////////////////////////////////////////////////////////////////
// subCategory

function getCategoryInfo() {
  let category = localStorage.getItem("category");
  let foodList = CategoryList[category];
  if (foodList == null) {
    alert(category + " 메뉴는 준비중이에요");
    return;
  }
  const ul = document.getElementById('sub-cat');
  if (ul == null) {
    return;
  }
  foodList.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener("click", (e) => {
      //searchYoutubeRecipe(item);
      searchNaverMap(item);
    });
    ul.appendChild(li);
  });
}

function selectFood() {

}