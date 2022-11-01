window.addEventListener('DOMContentLoaded', () => {
  
    //Tabs toggle
  
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabcontainer');

          function hideTabsContent() {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
          }

          function showTabsContent(i = 0) {
            tabsContent[i].style.display = 'block';
            tabs[i].classList.add('tabheader__item_active');
          }

          hideTabsContent();
          showTabsContent();

          tabParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if(target == item) {
                        hideTabsContent();
                        showTabsContent(i);
                    }
                }); 
            }
          });



    //Timer

    const deadline = '2020-10-27';

    function getTimeRemaining(endtime) {
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());

      if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }

      else {
        days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),
        hours = Math.floor( (t / (1000 * 60 * 60 ) % 24) ),
        minutes = Math.floor( (t / 1000 / 60) % 60 ),
        seconds = Math.floor( (t / 1000) % 60 );
      }

      return { total: t, days, hours, minutes, seconds };
    }

    function getZero(num) {
      if (num < 0 || num < 10) {
        return '0' + num;
      }
      else {
       return num; 
      }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
          const t = getTimeRemaining(endtime);
          
          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }

        }       
    }

    setClock('.timer', deadline);

    //Modal window toggle

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');
          
    function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn =>{
      btn.addEventListener('click', openModal);
    });

    function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if(e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });

    const modalTimerId = setTimeout(openModal, 3000);

    function modalScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
      }
      window.removeEventListener('scroll', modalScroll);
    }

    window.addEventListener('scroll', modalScroll);

});
