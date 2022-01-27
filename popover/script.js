// popover
const wrap = document.querySelector('.wrap');

// 생성
const createPopover = (newpop, btnpos) => {
    let popover = document.createElement('div');
    let arrow = document.createElement('div');
    let popTitle = document.createElement('h3');
    let popBody = document.createElement('div');

    popover.appendChild(arrow);
    popover.appendChild(popTitle);
    popover.appendChild(popBody);

    wrap.appendChild(popover);

    popover.classList.add('popover');
    arrow.classList.add('arrow');
    popTitle.classList.add('popover__title');
    popBody.classList.add('popover__body');

    popover.id = newpop.id;
    popBody.textContent = newpop.cont;
    popover.setAttribute('data-placement', newpop.place);

    let popoverHeight = popover.offsetHeight;
    let popoverWidth = popover.offsetWidth;

    let btnPosX = btnpos.btnX;
    let btnPosY = btnpos.btnY;
    let btnPosW = btnpos.btnW;
    let btnPosH = btnpos.btnH;

    switch (newpop.place) {
        case 'top':
            popover.setAttribute('style', `transform:translate3d(${(btnPosX + (btnPosW / 2)) - popoverWidth / 2}px, ${btnPosY - popoverHeight - 10}px, 0px)`);
            break;
        case 'left':
            popover.setAttribute('style', `transform:translate3d(${btnPosX - popoverWidth - 10}px, ${(btnPosY - (btnPosH / 2))}px, 0px)`);
            break;
        case 'right':
            popover.setAttribute('style', `transform:translate3d(${btnPosX + btnPosW + 10}px, ${(btnPosY - (btnPosH / 2))}px, 0px)`);
            break;
        case 'bottom':
            popover.setAttribute('style', `transform:translate3d(${(btnPosX + (btnPosW / 2)) - popoverWidth / 2}px, ${btnPosY + btnPosH + 10}px, 0px)`);
            break;
        default:
            console.log('default value');
    } 
};

// 삭제
const deletePopover = popId => {
    const popovers = document.querySelectorAll('.popover')

    popovers.forEach(popover => {
        if (popover.id == popId) {
            popover.remove();
        }
    })
}; 

// button
let btns = document.querySelectorAll('.btn');

// 버튼 데이터 & 위치
const getPopData = (popData, btnPos) => {
    const popObj = {
        id: popData.popId,
        place: popData.popPlace,
        cont: popData.popCont,
    }

    const btnPosObj = {
        btnX: btnPos.btnX,
        btnY: btnPos.btnY,
        btnW: btnPos.btnW,
        btnH: btnPos.btnH
    }

    createPopover(popObj,btnPosObj);
}

// button click event
btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        let ariaDesc = this.getAttribute('aria-describedby');
        let popData = {
            popId: `popover${String(Date.now()).slice(7,13)}`,
            popCont: this.getAttribute('data-content'),
            popPlace: this.getAttribute('data-placement'),
            popAria: this.getAttribute('aria-describedby')
        }
        let btnPos = {
            btnX: this.offsetLeft,
            btnY: this.offsetTop,
            btnW: this.offsetWidth,
            btnH: this.offsetHeight
        }

        if (this.hasAttribute('aria-describedby', "")) {
            this.removeAttribute('aria-describedby');
            deletePopover(popData.popAria);
        } else {
            this.setAttribute('aria-describedby', popData.popId);
            getPopData(popData, btnPos);
        }

    });
});