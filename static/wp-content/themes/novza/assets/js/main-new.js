jQuery(function ($) {
	// маска для телефона
	$.mask.definitions["^"] = null;
	$.mask.definitions["^"] = "[0-9]";
	$(".phone-mask").mask("+7 (^^^) ^^^-^^-^^");

	// табы
	$("body").on("click", ".tabs__item", function (t) {
		let e = $(this).index();
		$(this).hasClass("parent") && (e = $(this).parent().index()),
			$(this).hasClass("active") || ($(this).closest(".tabs").find(".tabs__item").removeClass("active"),
				$(this).addClass("active"),
				$(this).closest(".tabs").find(".tabs__content").removeClass("active").eq(e).addClass("active"),
				$(this).closest(".tabs").find(".tabs__content").length > 0 && $(this).closest(".tabs").find(".tabs__content")),
				$(this).closest(".tabs").find(".tabs__info").removeClass("active").eq(e).addClass("active"),
				$(this).closest(".tabs").find(".tabs__info").length > 0 && $(this).closest(".tabs").find(".tabs__info");
				
				
	});

	$("body").on("click", ".i-open", function (t) {
		$('.header-nav').addClass('show');
	});
	$("body").on("click", ".i-close", function (t) {
		$('.header-nav').removeClass('show');
	});
	$('.close-popup').click(function (e) {
		let $videoEl = $(this).closest('.popup__content-video').find('iframe');
		$videoEl.attr('src', $videoEl.attr('src'));
	});

	$(window).scroll(function () {
		let height = $(window).scrollTop();
		if (height > 100) {
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	});

	$("body").on("click", ".show-more-btn", function (t) {
		$(this).toggleClass('show');
		$('.seo-text').toggleClass('open');
	});
});

window.addEventListener('load', () => {
	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");

	let unlock = true;

	const timeout = 800;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(curentPopup) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойство
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();
	// Покажем окно с id="popup-first-visit" через 300000 миллисекунд
	setTimeout("document.getElementById('help').classList.add('open');", 120000);


	let headerLocationItemDesc = document.querySelector('.header__location-item');
	let headerLocationDesk = document.querySelector('.header__location');

	if (headerLocationItemDesc) {
		headerLocationItemDesc.addEventListener('click', function (e) {
			headerLocationDesk.classList.toggle('active');
		});

		document.documentElement.addEventListener('click', function (e) {
			if (!e.target.closest('.header__location')) {
				headerLocationDesk.classList.remove('active');
			}
		});
	}

	let headerLocationItemMob = document.querySelector('.header__location-item--mob');
	let headerLocationMob = document.querySelector('.header__location--mob');

	if (headerLocationItemMob) {
		headerLocationItemMob.addEventListener('click', function (e) {
			headerLocationMob.classList.toggle('active');
		});

		document.documentElement.addEventListener('click', function (e) {
			if (!e.target.closest('.header__location--mob')) {
				headerLocationMob.classList.remove('active');
			}
		});
	}

	// бургер меню
	let headerBurger = document.querySelector('.header__burger');
	let headerBurgerIcon = document.querySelector('.header__burger-icon');
	let headerBurgerBody = document.querySelector('body')

	if (headerBurgerIcon) {
		headerBurgerIcon.addEventListener('click', function (e) {
			headerBurger.classList.toggle('active');
			headerBurgerBody.classList.toggle('lock')
		});

		document.documentElement.addEventListener('click', function (e) {
			if (!e.target.closest('.header__burger')) {
				headerBurger.classList.remove('active');
				headerBurgerBody.classList.remove('lock')
			}
		});
	}

	// меню бургер
	const iconMenu = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('lock');
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}

	const menuLink = document.querySelectorAll('.menu__link');
	const iconMenuRemove = document.querySelector('.menu__icon');
	const menuBodyRemove = document.querySelector('.menu__body');
	menuLink.forEach(function (entry) {
		entry.addEventListener("click", function (event) {
			event.preventDefault();
			document.body.classList.remove('lock');
			iconMenuRemove.classList.remove('active');
			menuBodyRemove.classList.remove('active');
		});
	});

	// const feedbackBtn = document.querySelector('.feedback__btn');
	// const feedbackBody = document.querySelector('body');
	// if (feedbackBtn) {
	// 	feedbackBtn.addEventListener("click", function (e) {
	// 		feedbackBody.classList.toggle('lock');
	// 	});
	// }

	// const popupBtn = document.querySelector('.popup__btn');
	// const popupBody = document.querySelector('.home');
	// if (popupBtn) {
	// 	popupBtn.addEventListener("click", function (e) {
	// 		document.body.classList.toggle('lock');
	// 		popupBody.classList.toggle('active');
	// 	});
	// }

	// свайпер
	let giftSwiper = new Swiper('.gift__swiper', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next-gift",
			prevEl: ".swiper-button-prev-gift",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	let examplesSwiper = new Swiper('.examples__swiper', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: false,
		// navigation: {
		// 	nextEl: ".swiper-button-next-examples",
		// 	prevEl: ".swiper-button-prev-examples",
		// },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
	});

	let reviewsSwiper = new Swiper('.reviews__swiper', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: ".swiper-button-next-reviews",
			prevEl: ".swiper-button-prev-reviews",
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
			},
		},
	});

	let prioritySwiper = new Swiper('.priority__swiper', {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next-priority",
			prevEl: ".swiper-button-prev-priority",
		},
	});


});
