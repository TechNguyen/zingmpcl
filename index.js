const zmnav_items = Array.from(document.querySelectorAll('.zingmp3-navbar_item'));
zmnav_items.forEach(item => {
    item.addEventListener('click',  function () {
        let itemPre = zmnav_items.find(e => {
            if(e.className.includes('active-navbar')) {
                return e
            }
        })
        if(item != itemPre && itemPre != undefined) {
            itemPre.classList.remove('active-navbar')
            item.classList.add('active-navbar');

        } else {
            item.classList.add('active-navbar')
        }
    })
})

function hanlerClick(e) {
    var ePgX = e.pageX;
    var ePgY = e.pageY;
    var addPageLeft = zmp3AddList.getBoundingClientRect().left
    var addPageTop = zmp3AddList.getBoundingClientRect().top
    var addPageBottom = zmp3AddList.getBoundingClientRect().bottom
    var addPageRight = zmp3AddList.getBoundingClientRect().right
    if(ePgX > addPageLeft && ePgX < addPageRight && ePgY > addPageTop && ePgY < addPageBottom) {
        return 0;
    } else {
        zmp3Wwrapper.classList.remove('show-active')
        zmp3Wwrapper.classList.add('hiden-active')
        return 1
    }
}
// Click add playlist
const zmp3Wwrapper = document.querySelector('.zmp3-adddlist_wrapper')
const zmp3Create = document.querySelector('.zmp3-create');
zmp3Create.addEventListener('click', () => {
    zmp3Wwrapper.classList.remove('hiden-active')
    zmp3Wwrapper.classList.add('show-active')
    if(zmp3Wwrapper.className.includes('show-active')) {
        window.addEventListener('click', (e) => {
            hanlerClick(e)
        })
        window.removeEventListener('click', hanlerClick)
    }
    
})


const btnSwitch = Array.from(document.querySelectorAll('.btn-switch'))

btnSwitch.forEach((item) => {
    item.addEventListener('click', () => {
        if(item.className.includes('transform-btn-toLeft')) {
            item.classList.remove('transform-btn-toLeft')
            item.classList.add('transform-btn-toRight')
        } else {
            item.classList.remove('transform-btn-toRight')
            item.classList.add('transform-btn-toLeft')
        }
    })
})
var namePlayList;
const zmp3AddList = document.querySelector('.zmp3-addList')
const InputElement = document.querySelector('.zmp3-addList input');
const createListBtn = document.querySelector('.create-playlist')
const closeBtn = document.querySelector('.zmp3-addList i')
InputElement.oninput = () => {
    if(InputElement.value.trim() !== '') {
        createListBtn.style.cursor = 'pointer';
        createListBtn.removeAttribute([":disabled"]);
    }
}
createListBtn.addEventListener('click', () => {
    if(InputElement.value.trim() == '') {
        createListBtn.matches([":disabled"])
        InputElement.focus();
    } else {
        objectPlayList = {
            namePlaylist: InputElement.value,

        }
        createListBtn.removeAttribute([":disabled"])
    }
})
setInterval(() => {
    if(InputElement.value == '') {
        createListBtn.matches("disabled");
        createListBtn.style.cursor = 'not-allowed';
    }
}, 0)
closeBtn.addEventListener('click', () => {
    zmp3Wwrapper.classList.remove('show-active')
    zmp3Wwrapper.classList.add('hiden-active')
  
})


