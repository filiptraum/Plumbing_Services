  document.addEventListener("DOMContentLoaded", () => {
    function gabmurgerFunc(gamburderSelector, navigationSelector, itemsSelector) {

      const gamburger = document.querySelector(gamburderSelector);
      const navigation = document.querySelector(navigationSelector);
      const items = document.querySelectorAll(itemsSelector);

      items.forEach(item => {
        item.addEventListener('click', () => {
          gamburger.classList.remove('open');
          menuOpen = false;
          navigation.classList.remove('open');
        });
      });

      let menuOpen = false;
      gamburger.addEventListener('click', () => {
        if (!menuOpen) {
          gamburger.classList.add('open');
          menuOpen = true;
          navigation.classList.add('open');
        } else {
          gamburger.classList.remove('open');
          menuOpen = false;
          navigation.classList.remove('open');
        }
      });
    }
    gabmurgerFunc(".gamburger", ".header-menu", ".header-menu__item");;

    let wrapper = document.querySelector('.wrapper');
    if (wrapper.clientWidth > 825) {

      const offset = 550;
      const scrollUp = document.querySelector(".scroll-up");
      const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
      const pathLength = scrollUpSvgPath.getTotalLength();

      scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

      const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

      const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset = pathLength - (getTop() * pathLength / height);

        scrollUpSvgPath.style.strokeDashoffset = dashoffset;
      }

      window.addEventListener("scroll", () => {
        updateDashoffset();
        wrapper = document.querySelector('.wrapper');

        if (getTop() > offset && wrapper.clientWidth > 825) {
          scrollUp.classList.add("scroll-up_active");
        } else {
          scrollUp.classList.remove("scroll-up_active");
        }
      });

      scrollUp.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      updateDashoffset();
    };

    function openPopup() {
      const popup = document.querySelector('.popup-call-us');
      const btns = document.querySelectorAll('.btn-call-popup');
      const btnForClose = document.querySelector('.popup-call-us__close-btn');
      const wrapper = document.querySelector('.wrapper');
      const body = document.querySelector('.body');
      const thisInputFocus = document.querySelector('#popup-call-us__focus-here');

      let popupIsOpen = false;

      btns.forEach(item => {
        item.addEventListener('click', () => {
          if (!popupIsOpen) {
            popup.classList.add('popupIsOpen');
            body.classList.add('popupIsOpen');
            wrapper.classList.add('popupIsOpen');
            popupIsOpen = true;
          } else {
            popup.classList.remove('popupIsOpen');
            body.classList.remove('popupIsOpen');
            wrapper.classList.remove('popupIsOpen');
            popupIsOpen = false;
          }
        })
      });

      btnForClose.addEventListener('click', () => {
        popup.classList.remove('popupIsOpen');
        body.classList.remove('popupIsOpen');
        wrapper.classList.remove('popupIsOpen');
        popupIsOpen = false;
      });

      document.addEventListener('keydown', e => {
        if (popupIsOpen && e.keyCode == 9) {
          thisInputFocus.focus();
        }
      })
    }

    openPopup();

    function outNumPlus(startNum, num, elem, stepNum, timeNum, delay, symbol = '', symbolright = true, needZero = true) {
      const el = document.querySelector(elem);

      const time = +timeNum;
      const step = +stepNum

      let n = startNum;
      if (el.classList.contains("no-was-Working")) {
        setTimeout(() => {
          if (el.classList.contains("_anim-active")) {
            setTimeout(() => {
              let timeOut = Math.round(time / (num / step));
              let interval = setInterval(() => {
                n += step;
                if (n == num) {
                  clearInterval(interval);
                  if (symbolright) {
                    el.innerText = n + symbol;
                  } else {
                    el.innerText = symbol + n;
                  }
                } else if (n > num) {
                  clearInterval(interval)
                  if (symbolright) {
                    el.innerText = num + symbol;
                  } else {
                    el.innerText = symbol + num;
                  }
                } else {
                  let nLenght = n.toString().length;
                  let numLenght = num.toString().length;
                  let zero = '0';
                  if (numLenght > nLenght && needZero) {
                    for (let i = 1; i < numLenght - nLenght; i++) {
                      zero += '0';
                    }
                    if (symbolright) {
                      el.innerText = zero + n + symbol;
                    } else {
                      el.innerText = symbol + zero + n;
                    }
                  } else {
                    if (symbolright) {
                      el.innerText = n + symbol;
                    } else {
                      el.innerText = symbol + n;
                    }
                  }
                }
              }, timeOut);
            }, delay);
            setTimeout(() => {
              el.classList.remove("no-was-Working");
            }, 350);
          }
        }, 350);
      }
    }

    function outNumMinus(startNum, num, elem, stepNum, timeNum, delay, symbol = '', symbolright = true, needZero = true) {
      const el = document.querySelector(elem);

      const time = +timeNum;
      const step = +stepNum

      let n = startNum;
      if (el.classList.contains("no-was-Working")) {
        setTimeout(() => {
          if (el.classList.contains("_anim-active")) {
            setTimeout(() => {
              let timeOut = Math.round(time / num * step);
              let interval = setInterval(() => {
                n -= step;
                if (n == num) {
                  clearInterval(interval);
                  if (symbolright) {
                    el.innerText = num + symbol;
                  } else {
                    el.innerText = symbol + num;
                  }
                } else if (n < num) {
                  clearInterval(interval)
                  if (symbolright) {
                    el.innerText = num + symbol;
                  } else {
                    el.innerText = symbol + num;
                  }
                } else {
                  let nLenght = n.toString().length;
                  let numLenght = num.toString().length;
                  let zero = '0';
                  if (numLenght > nLenght && needZero) {
                    for (let i = 1; i < numLenght - nLenght; i++) {
                      zero += '0';
                    }
                    if (symbolright) {
                      el.innerText = zero + n + symbol;
                    } else {
                      el.innerText = symbol + zero + n;
                    }
                  } else {
                    if (symbolright) {
                      el.innerText = n + symbol;
                    } else {
                      el.innerText = symbol + n;
                    }
                  }
                }
              }, timeOut);
            }, delay);
            setTimeout(() => {
              el.classList.remove("no-was-Working");
            }, 350);
          }
        }, 350);
      }
    }

    outNumPlus(0, 400, "#facts_count1", 1, 3500, 800, '+');
    outNumPlus(0, 220, "#facts_count2", 1, 3500, 1000, '+');
    outNumPlus(0, 420, "#facts_count3", 1, 3500, 1200, '+');

    outNumMinus(219.99, 199.99, "#prices-item_number1", 1, 25000, 1000, '$', false, false);
    outNumMinus(119.99, 99.99, "#prices-item_number2", 1, 20000, 1000, '$', false, false);
    outNumMinus(319.99, 299.99, "#prices-item_number3", 1, 25000, 1000, '$', false, false);

    window.addEventListener("scroll", () => {
      outNumPlus(0, 400, "#facts_count1", 1, 3500, 800, '+');
      outNumPlus(0, 220, "#facts_count2", 1, 3500, 1000, '+');
      outNumPlus(0, 420, "#facts_count3", 1, 3500, 1200, '+');

      outNumMinus(219.99, 199.99, "#prices-item_number1", 1, 25000, 1000, '$', false, false);
      outNumMinus(119.99, 99.99, "#prices-item_number2", 1, 20000, 1000, '$', false, false);
      outNumMinus(319.99, 299.99, "#prices-item_number3", 1, 25000, 1000, '$', false, false);
    });;

    const animItems = document.querySelectorAll("._anim-items");

    if (animItems.length > 0) {
      window.addEventListener('scroll', animationScrolling);

      function animationScrolling() {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offsetFunc(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add("_anim-active");
          } else {
            if (!animItem.classList.contains('_active-no-hide')) {
              animItem.classList.remove("_anim-active");
            }
          }
        }
      }

      function offsetFunc(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        }
      }

      setTimeout(() => {
        animationScrolling();
      }, 300);
    };
  })