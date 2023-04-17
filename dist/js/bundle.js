/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calculator() {\r\n    const result = document.querySelector(\".calculating__result span\");\r\n    let sex, height, weight, age, ratio;\r\n\r\n    if (localStorage.getItem(\"ratio\")) {\r\n        ratio = localStorage.getItem(\"ratio\");\r\n    } else {\r\n        ratio = 1.375;\r\n        localStorage.setItem(\"ratio\", ratio);\r\n    }\r\n\r\n    if (localStorage.getItem(\"sex\")) {\r\n        sex = localStorage.getItem(\"sex\");\r\n    } else {\r\n        sex = \"female\";\r\n        localStorage.setItem(\"sex\", sex);\r\n    }\r\n\r\n    function initLocalSettings(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n        \r\n        elements.forEach(elem => {\r\n        elem.classList.remove(activeClass);\r\n        if (elem.getAttribute(\"id\") === localStorage.getItem(\"sex\")) {\r\n            elem.classList.add(activeClass);\r\n        }\r\n        if (elem.getAttribute(\"data-ratio\") === localStorage.getItem(\"ratio\")) {\r\n            elem.classList.add(activeClass);\r\n        }\r\n        });\r\n    }\r\n\r\n    function calcTotal() {\r\n        if (!sex || !height || !weight || !age || !ratio) {\r\n            result.textContent = \"____\";\r\n            return;\r\n        } \r\n\r\n        if (sex == \"female\") {\r\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);\r\n        }\r\n    }\r\n\r\n    calcTotal();\r\n    initLocalSettings(\"#gender div\", \"calculating__choose-item_active\");\r\n    initLocalSettings(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n\r\n    function getStaticInformation(selector, active) {\r\n        const elements = document.querySelectorAll(selector);\r\n        elements.forEach(elem => {\r\n            elem.addEventListener(\"click\", (e) => {\r\n                if (e.target.getAttribute(\"data-ratio\")) {\r\n                    ratio = +e.target.getAttribute(\"data-ratio\");\r\n                    localStorage.setItem(\"ratio\", +e.target.getAttribute(\"data-ratio\"));\r\n                } else {\r\n                    sex = e.target.getAttribute(\"id\");\r\n                    localStorage.setItem(\"sex\", e.target.getAttribute(\"id\"));\r\n                }\r\n        \r\n                console.log(ratio, sex);\r\n        \r\n                elements.forEach(elem => {\r\n                    elem.classList.remove(active);\r\n                });\r\n                e.target.classList.add(active);\r\n        \r\n                calcTotal();\r\n            });\r\n        })\r\n    }\r\n\r\n    function getDynamicInformation(inputSelector) {\r\n        const input = document.querySelector(inputSelector);\r\n\r\n        input.addEventListener(\"input\", () => {\r\n\r\n            if (input.value.match(/\\D/g)) {\r\n                input.style.border = \"1px solid red\";\r\n            } else {\r\n                input.style.border = \"none\";\r\n            }\r\n\r\n            switch (input.getAttribute(\"id\")) {\r\n                case \"height\":\r\n                height = +input.value;\r\n                break;\r\n            \r\n                case \"weight\":\r\n                weight = +input.value;\r\n                break;\r\n\r\n                case \"age\":\r\n                age = +input.value;\r\n                break;  \r\n            }\r\n            calcTotal();\r\n        });\r\n    }\r\n\r\n    getDynamicInformation(\"#height\");\r\n    getDynamicInformation(\"#weight\");\r\n    getDynamicInformation(\"#age\");\r\n  \r\n    getStaticInformation(\"#gender div\", \"calculating__choose-item_active\");\r\n    getStaticInformation(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://jspractice/./js/modules/calculator.js?");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cards() {\r\n    class MenuCard {\r\n        constructor(src, alt, title, desc, price, parentSelector, ...classes) {\r\n          this.src = src;\r\n          this.alt = alt;\r\n          this.title = title;\r\n          this.desc = desc;\r\n          this.price = price;\r\n          this.classes = classes;\r\n          this.parent = document.querySelector(parentSelector);\r\n          this.transfer = 462;\r\n          this.convertCurrency();\r\n        }\r\n    \r\n        convertCurrency() {\r\n          this.price = this.transfer * this.price;\r\n        }\r\n    \r\n        render() {\r\n          const element = document.createElement('div');\r\n          \r\n          if (this.classes.length === 0) {\r\n              this.element = 'menu__item';\r\n              element.classList.add(this.element);\r\n          } else {\r\n              this.classes.forEach(className => {element.classList.add(className)});\r\n          }\r\n    \r\n          element.innerHTML = `\r\n            <img src=\"${this.src}\" alt=\"${this.alt}\">\r\n            <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n            <div class=\"menu__item-descr\">${this.desc}</div>\r\n            <div class=\"menu__item-divider\"></div>\r\n            <div class=\"menu__item-price\">\r\n                <div class=\"menu__item-cost\">Цена:</div>\r\n                <div class=\"menu__item-total\"><span>${this.price}</span> тг/день</div>\r\n            </div>\r\n          `;\r\n          this.parent.append(element);\r\n        }\r\n      }\r\n    \r\n      const getResource = async (url) => {\r\n        const res = await fetch(url);\r\n        \r\n        if (!res.ok) {\r\n          throw new Error(`Could not fetch ${url}, status: ${res.status}`);\r\n        }\r\n    \r\n        return await res.json();\r\n      }\r\n    \r\n      getResource(\"http://localhost:3000/menu\")\r\n        .then(data => {\r\n          data.forEach(({img, altimg, title, descr, price}) => {\r\n            new MenuCard(img, altimg, title, descr, price, \".menu .container\").render()\r\n          });\r\n        });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n//# sourceURL=webpack://jspractice/./js/modules/cards.js?");

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\r\n\r\nfunction forms(modalTimerId) {\r\n    const forms = document.querySelectorAll(\"form\");\r\n\r\n    forms.forEach((item) => {\r\n      bindPostData(item);\r\n    })\r\n  \r\n    const postData = async (url, data) => {\r\n      const res = await fetch(url, {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\"\r\n        },\r\n        body: data\r\n      });\r\n      \r\n      return await res.json();\r\n    }\r\n    \r\n    function bindPostData(form) {\r\n      form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const message = {\r\n          loading: \"img/form/spinner.svg\",\r\n          success: \"Ваш запрос успешно отправлен, с Вами скоро свяжутся!\",\r\n          fail: \"Что-то пошло не так...\"\r\n        }\r\n  \r\n        const statusMessage = document.createElement(\"img\");\r\n        statusMessage.src = message.loading;\r\n        statusMessage.style.cssText = `\r\n          display: block;\r\n          margin: 0 auto;\r\n        `;\r\n        form.insertAdjacentElement(\"afterend\", statusMessage);\r\n  \r\n        const formData = new FormData(form);\r\n        const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n        \r\n        postData(\"http://localhost:3000/requests\", json)\r\n        .then((data) => {\r\n          console.log(data);\r\n          showGreetingMessage(message.success);\r\n          statusMessage.remove();\r\n        })\r\n        .finally(() => {\r\n          form.reset();\r\n        })\r\n        .catch((error) => {\r\n          console.warn(\"Oops, something happened...\" + error);\r\n          showGreetingMessage(message.fail);\r\n        })\r\n      });\r\n    }\r\n\r\n    function showGreetingMessage(requestMessage) {\r\n        const modalDialog = document.querySelector(\".modal__dialog\");\r\n        modalDialog.classList.add(\"hide\");\r\n    \r\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);\r\n    \r\n        const modalGreeting = document.createElement(\"div\");\r\n        modalGreeting.classList.add(\"modal__dialog\");\r\n        modalGreeting.innerHTML = `\r\n          <div class=\"modal__content\">\r\n            <div data-close=\"\" class=\"modal__close\">×</div>\r\n            <div class=\"modal__title\">${requestMessage}</div>\r\n          </div>\r\n        `;\r\n        document.querySelector(\".modal\").append(modalGreeting);\r\n       \r\n        setTimeout(() => {\r\n          modalGreeting.remove();\r\n          modalDialog.classList.add(\"show\");\r\n          modalDialog.classList.remove(\"hide\");\r\n          (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');\r\n        }, 4000);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://jspractice/./js/modules/forms.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modalSelector, modalTimerId) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add('show');\r\n    modal.classList.remove('hide');\r\n    document.body.style.overflow = 'hidden';\r\n    console.log(modalTimerId);\r\n    if (modalTimerId) {\r\n        clearInterval(modalTimerId);\r\n    }\r\n}\r\n\r\nfunction closeModal(modalSelector) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add('hide');\r\n    modal.classList.remove('show');\r\n    document.body.style.overflow = '';\r\n}\r\n\r\nfunction modal(triggerSelector, modalSelector, modalTimerId) {\r\n    const modalTrigger = document.querySelectorAll(triggerSelector),\r\n    modal = document.querySelector(modalSelector);\r\n        \r\n    modalTrigger.forEach(btn => {\r\n      btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n      if (e.target === modal || e.target.getAttribute(\"data-close\") == '') {\r\n        closeModal(modalSelector);\r\n      }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n      if(e.code === 'Escape' && modal.classList.contains('show')) {\r\n        closeModal(modalSelector);\r\n      }\r\n    });\r\n\r\n    function modalScroll() {\r\n      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\r\n        openModal(modalSelector, modalTimerId);\r\n      }\r\n      window.removeEventListener('scroll', modalScroll);\r\n    }\r\n\r\n    window.addEventListener('scroll', modalScroll);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\n\n//# sourceURL=webpack://jspractice/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\r\n    const slides = document.querySelectorAll(\".offer__slide\"),\r\n        slider = document.querySelector(\".offer__slider\"),\r\n        next = document.querySelector(\".offer__slider-next\"),\r\n        prev = document.querySelector(\".offer__slider-prev\"),\r\n        total = document.getElementById(\"total\"),\r\n        current = document.getElementById(\"current\"),\r\n        slidesWrapper = document.querySelector(\".offer__slider-wrapper\"),\r\n        slidesFeild = document.querySelector(\".offer__slider-inner\"),\r\n        width = window.getComputedStyle(slidesWrapper).width;\r\n  \r\n  let slideIndex = 1;\r\n  let offset = 0;\r\n  \r\n  if (slides.length < 10) {\r\n    total.textContent = `0${slides.length}`;\r\n    current.textContent = `0${slideIndex}`;\r\n  } else {\r\n    total.textContent = slides.length;\r\n    current.textContent = slideIndex;\r\n  }\r\n\r\n  slidesFeild.style.width = 100 * slides.length + \"%\";\r\n  slidesFeild.style.display = \"flex\";\r\n  slidesFeild.style.transition = \"0.5s all\";\r\n\r\n  slidesWrapper.style.overflow = \"hidden\";\r\n\r\n  slides.forEach(slide => {\r\n    slide.style.width = width;\r\n  });\r\n\r\n  slider.style.position = \"relative\";\r\n\r\n  const indicators = document.createElement(\"ol\"),\r\n        dots = [];\r\n  indicators.classList.add(\"carousel-indicators\");\r\n  indicators.style.cssText = `\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 15;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n    list-style: none;\r\n  `;\r\n  slider.append(indicators);\r\n\r\n  for(let i = 0; i < slides.length; i++) {\r\n    const dot = document.createElement(\"li\");\r\n    dot.classList.add(\"dot\");\r\n    dot.style.cssText = `\r\n      box-sizing: content-box;\r\n      flex: 0 1 auto;\r\n      width: 30px;\r\n      height: 6px;\r\n      margin-right: 3px;\r\n      margin-left: 3px;\r\n      cursor: pointer;\r\n      background-color: #fff;\r\n      background-clip: padding-box;\r\n      border-top: 10px solid transparent;\r\n      border-bottom: 10px solid transparent;\r\n      opacity: .5;\r\n      transition: opacity .6s ease;\r\n    `;\r\n    dot.setAttribute(\"data-slide-to\", i + 1);\r\n    if (i == 0) {\r\n      dot.style.opacity = 1;\r\n    }\r\n    dots.push(dot);\r\n    indicators.append(dot);\r\n  }\r\n\r\n  function currentCounter() {\r\n    if (slides.length < 10) {\r\n      current.textContent = `0${slideIndex}`;\r\n    } else {\r\n      current.textContent = slideIndex;\r\n    }\r\n  }\r\n\r\n  function initialDot() {\r\n    dots.forEach(dot => dot.style.opacity = 0.5);\r\n    dots[slideIndex - 1].style.opacity = 1;\r\n  }\r\n\r\n  next.addEventListener(\"click\", () => {\r\n    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {\r\n      offset = 0;\r\n    } else {\r\n      offset += +width.slice(0, width.length - 2);\r\n    }\r\n    slidesFeild.style.transform = `translateX(-${offset}px)`;\r\n\r\n    if (slideIndex == slides.length) {\r\n      slideIndex = 1;\r\n    } else {\r\n      slideIndex++;\r\n    }\r\n\r\n    currentCounter();\r\n    initialDot()\r\n  });\r\n\r\n  prev.addEventListener(\"click\", () => {\r\n    if (offset == 0) {\r\n      offset = +width.slice(0, width.length - 2) * (slides.length - 1);\r\n    } else {\r\n      offset -= +width.slice(0, width.length - 2);\r\n    }\r\n    slidesFeild.style.transform = `translateX(-${offset}px)`;\r\n\r\n    if (slideIndex == 1) {\r\n      slideIndex = slides.length;\r\n    } else {\r\n      slideIndex--;\r\n    }\r\n\r\n    currentCounter();\r\n    initialDot()\r\n  });\r\n\r\n  dots.forEach(dot => {\r\n    dot.addEventListener(\"click\", (e) => {\r\n      const slideTo = e.target.getAttribute(\"data-slide-to\");\r\n      slideIndex = slideTo;\r\n      offset = +width.slice(0, width.length - 2) * (slideTo - 1);\r\n      slidesFeild.style.transform = `translateX(-${offset}px)`;\r\n\r\n      initialDot()\r\n      currentCounter();\r\n    });\r\n  });\r\n  \r\n  // total.textContent = slides.length;\r\n  // counter.textContent = slideIndex;\r\n\r\n  // showSlides(slideIndex);\r\n\r\n  // function showSlides(n) {\r\n  //   if (n > slides.length) {\r\n  //     slideIndex = 1;\r\n  //   }\r\n\r\n  //   if (n < 1) {\r\n  //     slideIndex = slides.length;\r\n  //   }\r\n\r\n  //   slides.forEach(item => item.style.display = \"none\");\r\n  //   slides[slideIndex - 1].style.display = \"block\";\r\n\r\n    \r\n  \r\n  // }\r\n\r\n  // function indexChange(n) {\r\n  //   slideIndex = slideIndex + n;\r\n  //   counter.textContent = slideIndex;\r\n  //   showSlides(slideIndex)\r\n  // }\r\n\r\n  // next.addEventListener(\"click\", () => {\r\n  //   indexChange(1);\r\n  // })\r\n\r\n  // prev.addEventListener(\"click\", () => {\r\n  //   indexChange(-1);\r\n  // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://jspractice/./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    let tabs = document.querySelectorAll('.tabheader__item'),\r\n        tabsContent = document.querySelectorAll('.tabcontent'),\r\n        tabParent = document.querySelector('.tabcontainer');\r\n\r\n    function hideTabsContent() {\r\n      tabsContent.forEach(item => {\r\n          item.classList.add('hide');\r\n          item.classList.remove('show', 'fade');\r\n      });\r\n\r\n      tabs.forEach(item => {\r\n          item.classList.remove('tabheader__item_active');\r\n      });\r\n    }\r\n\r\n    function showTabsContent(i = 0) {\r\n        tabsContent[i].classList.add('show', 'fade');\r\n        tabsContent[i].classList.remove('hide');\r\n        tabs[i].classList.add('tabheader__item_active');\r\n    }\r\n\r\n    hideTabsContent();\r\n    showTabsContent();\r\n\r\n    tabParent.addEventListener('click', (event) => {\r\n        const target = event.target\r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabsContent();\r\n                    showTabsContent(i);\r\n                }\r\n            }); \r\n        }\r\n    });   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://jspractice/./js/modules/tabs.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer() {\r\n    const deadline = '2023-03-27';\r\n\r\n    function getTimeRemaining(endtime) {\r\n      let days, hours, minutes, seconds;\r\n      const t = Date.parse(endtime) - Date.parse(new Date());\r\n\r\n      if (t <= 0) {\r\n        days = 0;\r\n        hours = 0;\r\n        minutes = 0;\r\n        seconds = 0;\r\n      }\r\n\r\n      else {\r\n        days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),\r\n        hours = Math.floor( (t / (1000 * 60 * 60 ) % 24) ),\r\n        minutes = Math.floor( (t / 1000 / 60) % 60 ),\r\n        seconds = Math.floor( (t / 1000) % 60 );\r\n      }\r\n\r\n      return { total: t, days, hours, minutes, seconds };\r\n    }\r\n\r\n    function getZero(num) {\r\n      if (num < 0 || num < 10) {\r\n        return '0' + num;\r\n      }\r\n      else {\r\n       return num; \r\n      }\r\n    }\r\n\r\n    function setClock(selector, endtime) {\r\n        const timer = document.querySelector(selector),\r\n              days = timer.querySelector('#days'),\r\n              hours = timer.querySelector('#hours'),\r\n              minutes = timer.querySelector('#minutes'),\r\n              seconds = timer.querySelector('#seconds'),\r\n              timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n          const t = getTimeRemaining(endtime);\r\n          \r\n          days.innerHTML = getZero(t.days);\r\n          hours.innerHTML = getZero(t.hours);\r\n          minutes.innerHTML = getZero(t.minutes);\r\n          seconds.innerHTML = getZero(t.seconds);\r\n\r\n          if (t.total <= 0) {\r\n            clearInterval(timeInterval);\r\n          }\r\n\r\n        }       \r\n    }\r\n\r\n    setClock('.timer', deadline);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://jspractice/./js/modules/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ \"./js/modules/cards.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./js/modules/forms.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./js/modules/calculator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 50000);\r\n\r\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('[data-modal]', '.modal', modalTimerId);\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(modalTimerId);\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://jspractice/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;