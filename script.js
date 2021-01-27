const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('active');
}

function activeTab (index) {
  tabContent.forEach((item) => {
    item.classList.remove('active');
  });
  tabContent[index].classList = 'active';

  console.log(index);
}

tabMenu.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index);
  });
})