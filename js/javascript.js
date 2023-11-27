var myMap; // Объявляем переменную для карты
var Dormitory = false;// Необходимо для проверки активности корпусов/Общежитий
var Pavilion = false;
var Main = false;
var control;
var center_position = [47.23723507426487,39.712281999999966];// Расположение основной метки с координатами lat lon
/*var markerss = [];*/
var markers = [
	{
		name: 'РОСТОВ-НА-ДОНУ, ПЛОЩАДЬ ГАГАРИН',// Имя метки
		coordinates: [47.23723507426487, 39.712281999999966], // Координаты метки
		address:'РОСТОВ-НА-ДОНУ, ПЛОЩАДЬ ГАГАРИН, 1',//Адрес(Аналог координат) необходим для некоторых функций
		description: 'Это место находится по адресу: РОСТОВ-НА-ДОНУ, ПЛОЩАДЬ ГАГАРИНА, 1',// Описание с возможностью использования Html тегов
		mark_id:0, //Primary Key Id для возможности определения меток
		type: 0 // Определение типа меток
	},
	{
		name: 'Общежитие №1',
		coordinates: [47.259617,39.771966],
		address: 'Ростов-на-Дону, микрорайон Сельмаш, Студенческая улица, 2',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместный и более; в каждом крыле общежития расположены: кухня, умывальная комната, душевая комната и санузел; спортзал. Телефон: 8 (863) 252-15-78',
		mark_id:1,
		type: 1
	},
	{
		name: 'Общежитие №2',
		coordinates: [47.23937,39.712974],
		address: 'Ростов-на-Дону, проспект Михаила Нагибина, 5',
		description: 'планировка жилых помещений - блочный тип; тип размещения – трехместный и более;; каждый блок состоит из двух жилых комнат, кухни, душевой и туалетной комнаты; актовый зал; Телефон: 8 (863) 273-84-18.',
		mark_id:2,
		type: 1
	},
	{
		name: 'Общежитие №3',
		coordinates: [47.237779,39.697514],
		address: 'Ростов-на-Дону, улица Мечникова, 130',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместный и более; в каждом крыле общежития расположены: кухня, умывальная комната, душевая комната и санузел; библиотека; спортзал; Телефон: 8 (863) 273-84-19.',
		mark_id:3,
		type: 1
	},
	{
		name: 'Общежитие №4',
		coordinates: [47.235975,39.710566],
		address: 'Ростов-на-Дону, улица Текучёва, 145',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместный и более.Имеются комната для самостоятельной подготовки; актовый зал; спортзал мужской и женский; настольный теннис; Телефон: 8 (863) 273-87-10.',
		mark_id:4,
		type: 1
	},
	{
		name: 'Общежитие №5',
		coordinates: [47.236391,39.710099],
		address: 'Ростов-на-Дону, улица Мечникова, 154А',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместное; Каждая квартира состоит из жилой комнаты, кухни и ванной; Телефон: 8 (863) 273-86-02. ',
		mark_id:5,
		type: 1
	},
	{
		name: 'Общежитие №6',
		coordinates: [47.256339,39.76654],
		address: 'Ростов-на-Дону, улица Пановой, 39/104',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместный и более; В каждом крыле общежития расположены: кухня, умывальная комната и санузел. Душ расположен на первом этаже. Телефон: 8 (863) 254-11-88',
		mark_id:6,
		type: 1
	},
	{
		name: 'Общежитие №7',
		coordinates: [47.245353,39.766702],
		address: 'Ростов-на-Дону, микрорайон Сельмаш, проспект Мира, 7',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместное; в каждом крыле общежития расположены: кухня, умывальная комната и санузел. Душ расположен на первом этаже. Телефон 8 (863) 252-14-14.',
		mark_id:7,
		type: 1
	},
	{
		name: 'Общежитие №8',
		coordinates: [47.233735, 39.763737],
		address: 'Ростов-на-Дону, Нахичевань, улица 24-я Линия, 1/3',
		description: 'планировка жилых помещений - коридорный тип; тип размещения – трехместный и более. В каждом крыле общежития расположены: кухня, умывальная комната и санузел. Душ расположен на первом этаже. Телефон: 8 (863) 251-17-33.',
		mark_id:8,
		type: 1
	},
	{
		name: 'Общежитие №9',
		coordinates: [47.241083,39.75983],
		address: 'Ростов-на-Дону, проспект Шолохова, 94/77',
		description: 'планировка жилых помещений - блочный тип; тип размещения – трехместный и более. На каждом этаже по 15 блоков, который состоит из двух-трех жилых комнат, кухни, душевой и туалетной комнаты. Телефон: 8 (863) 251-98-38.',
		mark_id:9,
		type: 1
	},
	{
		name: 'Общежитие №10',
		coordinates: [47.23774405651044,39.70993666961609],
		address: 'Ростов-на-Дону, улица Мечникова, 79Б',
		description: 'Описание планировка жилых помещений - квартирный тип; тип размещения – трехместное; Каждая квартира имеет душевую и туалетную комнаты, кухню. Телефон: 8 (863) 238-17-57.',
		mark_id:10,
		type: 1
	},
	{
		name: 'корпус 1',
		coordinates: [47.237235,39.712282],
		address: 'Ростов-на-Дону, площадь Гагарина, 1',
		description: 'Главный корпус (№ 1) расположен на площади Гагарина, 1. Он является одним из самых старых и больших в ДГТУ. Первый корпус — яркое произведение советского неоклассицизма. Четырёхэтажное здание занимает 25 156,5 кв. м. Позади здания размещается обширный Студенческий парк.Телефон: 8 (800) 100-19-30.',
		mark_id:11,
		type: 2
	},
	{
		name: 'корпус 2',
		coordinates: [47.238122,39.712569],
		address: 'Ростов-на-Дону, проспект Михаила Нагибина, 3',
		description: 'во втором корпусе вуза находятся лаборатории, медиапарк «Южный регион-ДГТУ». Здание было построено в 1971 году. Оно состоит из 8-ми этажей и занимает 6790,1 м2 ',
		mark_id:12,
		type: 2
	},
	{
		name: 'корпус 3,4,5',
		coordinates: [47.238130112004434,39.70946350196075],
		address: 'Ростов-на-Дону, площадь Гагарина, 1к5',
		description: 'корпуса № 3-5 расположены в одном четырёхэтажном здании, построенном в 1975 году и занимает 7921,2 м² территории на площади Гагарина. Здесь находится институт физической культуры и спорта.',
		mark_id:13,
		type: 2
	},
	{
		name: 'корпус 6',
		coordinates: [47.238122,39.712569],
		address: 'Ростов-на-Дону, проспект Михаила Нагибина, 3',
		description: 'корпус № 6 ДГТУ — это строение 1981 года, учебный корпус, что находится на улице просп. Михаила Нагибина. ',
		mark_id:14,
		type: 2
	},
	{
		name: 'корпус 7',
		coordinates: [47.238385,39.712174],
		address: 'Ростов-на-Дону, проспект Михаила Нагибина, 3Гк7',
		description: 'корпус №7 ДГТУ – это строение 1981 года, учебный корпус, что находится на улице просп. Михаила Нагибина. Там располагаются: Коворкинг «Гараж»; Медиапарк «Южный регион».',
		mark_id:15,
		type: 2
	},
	{
		name: 'корпус 8',
		coordinates: [47.23793728469854,39.71108037036129],
		address: 'Ростов-на-Дону, площадь Гагарина, 1к8',
		description: 'корпус №8 располагается в здании 2008 года постройки на площади Гагарина. Здесь имеются: Гимназия ДГТУ; Колледж IThub; Столовая "Экспресс"; Кофейня "Гардероб".',
		mark_id:16,
		type: 2
	},
	{
		name: 'корпус 9',
		coordinates: [47.237235,39.712282],
		address: 'Ростов-на-Дону, площадь Гагарина, 1',
		description: '9 корпус представляет из себя концертный зал ДГТУ, носящий название Конгресс Холл.',
		mark_id:17,
		type: 2
	},
	{
		name: 'корпус 10',
		coordinates: [47.248302,39.757566],
		address: 'Ростов-на-Дону, площадь Страны Советов, 1',
		description: 'корпус № 10, 1976-го года постройки, расположен в районе Сельмаш на ул. Страны Советов,1.',
		mark_id:18,
		type: 2
	},
	{
		name: 'корпус 11',
		coordinates: [47.251305,39.653694],
		address: 'Ростов-на-Дону, улица Шаповалова, 2',
		description: 'улица Шаповалова, 2. Здесь располагаются Учебный военный центр; Корпус "Наука"; Институт опережающих технологий "Школа Икс".',
		mark_id:19,
		type: 2
	},
	{
		name: 'корпуса 21,22,23,24,25,26',
		coordinates: [47.22373,39.732359],
		address: 'Ростов-на-Дону, Социалистическая улица, 162/32',
		description: 'в 21-26 корпусах располагаюся культурно-выставочный центр Донская казачья гвардия, факультеты: Инженерно-строительный, Сервис и туризм, Инновационный бизнес и менеджмент, Юридический',
		mark_id:20,
		type: 2
	}
];

/*Временно неиспользуемая функция*/
function placemark_list(placemarkmark_id) {

	myMap.setCenter(markers[placemarkmark_id].coordinates, 17);
		console.log(placemarkmark_id);
}
/*Временно неиспользуемая функция*/
function Navigation(placemark_id) {
	if (!control) {
		control = new ymaps.control.RoutePanel({
			options: {
				float: 'left',
				maxWidth: '100px'
			}
		});
		control.routePanel.state.set({
			type: 'masstransit',
			fromEnabled: true,
			from: '',
			toEnabled: false,
			to: markers[placemark_id].address
		});

		myMap.controls.add(control);
	}else {
		myMap.controls.remove(control);
		control = null;
	}
}

ymaps.ready(function () {
	/*Перезапись в глабальную переменную myMap (Создание карты при запуске странице с Центром и Увеличением)*/
	myMap = new ymaps.Map('map', {
		center: center_position,
		zoom: 15
	});
/*
	function addMarker(coordinate, name, description) {
		var marker = new ymaps.Placemark(coordinate, {
			hintContent: name,
			balloonContent: description
		});
		myMap.geoObjects.add(marker);
		markerss.push(marker);
	}

	function removeAllMarkers() {
		for (var i = 0; i < markerss.length; i++) {
			myMap.geoObjects.remove(markerss[i]);
		}
		markerss = []; // Очистите массив меток
	}

	Я не помню зачем я это оставил но пусть будет
*/
	function showNavigation() {
		/*Функция показа для панели навигации*/
		if (!control) {
			/*Если глобальная переменная control не имеет данных то происходит запись данных для ymap RoutePanel(Левое расположение и максимальной высотой 100px(можно использовать относительные значения но не желательно))*/
			control = new ymaps.control.RoutePanel({
				options: {
					float: 'left',
					maxWidth: '100px'
				}
			});
			/*Обновление(Установка/SET) статистики control.routePanel с типом masstransit(Пешая ходьба, автобус и такси)*/
			control.routePanel.state.set({
				type: 'masstransit',
				fromEnabled: true, /*Возможность редактировать поле откуда*/
				from: '',
				toEnabled: false,/*Отключение возможности взаимодействия пользователя с полем(Куда) и установка направления на адрес(с помощью функции можно допилить получение адресса из lat lon но я рот ебал)*/
				to: 'РОСТОВ-НА-ДОНУ, ПЛОЩАДЬ ГАГАРИНА, 1'
			});

			myMap.controls.add(control);/*Инициализация самой понели controls к глобальной переменной myMap(Наша карта)*/
		}else {
			myMap.controls.remove(control);
			control = null;
			/*Функция удаления панели и очистка переменной*/
		}
	}

	// Назначаем обработчик события на кнопку
	document.getElementById('showNavigation').addEventListener('click', showNavigation);
	var Main_clusterer = new ymaps.GeoObjectCollection();


	document.getElementById('showMain').addEventListener('click', function () {
		/*Поиск по сайту элементов с id showMain и запуск обработчика прослушки проверки нажатия на элемент*/
		/*Проверка Переменной на наличие в ней False*/
		if(Main===false) {
			/*Создание локальной переменной в этой функции placemark(Метка на карте) со значениями Имени и Описания*/
			var placemark = new ymaps.Placemark(markers[0].coordinates, {
				hintContent: markers[0].name,
				balloonContent: markers[0].description
			});
			/*Добавление метки в кластер*/
			Main_clusterer.add(placemark);
			/*Добавление кластера на карту*/
			myMap.geoObjects.add(Main_clusterer);
			/*Обновление позиции карты на координаты полученные из массива и размер 15*/
			myMap.setCenter(markers[0].coordinates, 15);
			/*Обновление переменной Main*/
			Main=true;
		}else{
			myMap.geoObjects.remove(Main_clusterer);
			Main=false;
			/*Удаление геометок с карты и обновление переменной для возможности использования как переключатель*/
		}
	});

	var Pavilion_clusterer = new ymaps.GeoObjectCollection();/*Еще одно переменная на уровень выше чем функция(Будет глобальной для следующей функции но не глобальной для файла)*/
	document.getElementById('showPavilion').addEventListener('click', function () {
		if (Pavilion===false) {/*Проверка состояния переменной Pavilion*/
			for (var i = 0; i < markers.length; i++){/*Запуск цикла и созданее локальной переменной и равной 0. Если i меньше длины значений массива markers, то будет происходить увеличение на 1 пока не будет больше(или равно если так поставить но нам нужно больше)*/
				if (markers[i].type===2) {/*Проверка на тип, чтобы проходили только данные с типом 2*/
					var placemark = new ymaps.Placemark(markers[i].coordinates, {/*Создание маркера с именем и описанием*/
						hintContent: markers[i].name,
						balloonContent: markers[i].description
					});

					Pavilion_clusterer.add(placemark);/*каждый цикл добавляет возможные метки в кластер который мы указали на уровень выше*/
					document.getElementById('content1').innerHTML += "<div class='card2' id='pavilion'><p class=\"button\" id=\"placemark_list\" onclick='placemark_list("+markers[i].mark_id+");'>Перейти к: "+markers[i].name+"          Mark_id:"+markers[i].mark_id+"</p><p class=\"button\" onclick='Navigation("+markers[i].mark_id+");'>Навигация</p><h1>"+markers[i].name+"</h1><p>"+markers[i].description+"</p></div>";
				/*Изменение элемента по Ид с заменой на Html*/
				}
			}

			myMap.geoObjects.add(Pavilion_clusterer);
			Pavilion = true;/*Добавление всех данных из кластера как группу меток и обновление состояния переменной*/
		}else{
			myMap.geoObjects.remove(Pavilion_clusterer);/*
			document.getElementById('content1').innerHTML = "";*/
			/*Удаление гео меток*/
			const pavilionDivs = document.querySelectorAll('#pavilion');/*Создание переменной с провереным наличием всех Html обьектов с ИД pavilion*/
			pavilionDivs.forEach(div => div.remove());/*Функция pavilionDivs выбирает все элементы с идентификатором "pavilion" и сохраняет их в переменной pavilionDivs. Затем, с помощью метода forEach, функция выполняет заданную функцию для каждого элемента в pavilionDivs. В данном случае, функция удаляет каждый элемент из HTML-документа с помощью метода remove().*/
			Pavilion = false;/*Обновление переменной*/
		}
	});
/*ТОже самая функции но только для другой кнопки(Описание смотреть выше)*/
	var Dormitory_clusterer = new ymaps.GeoObjectCollection();
	document.getElementById('showDormitory').addEventListener('click', function () {
		if (Dormitory===false) {
		for (var i = 0; i < markers.length; i++){
			if (markers[i].type===1) {
				var placemark = new ymaps.Placemark(markers[i].coordinates, {
					hintContent: markers[i].name,
					balloonContent: markers[i].description
				});

				Dormitory_clusterer.add(placemark);
				document.getElementById('content1').innerHTML += "<div class='card2' id='dormitory'><p class=\"button\" id=\"placemark_list\" onclick='placemark_list("+markers[i].mark_id+");'>Перейти к: "+markers[i].name+"          Mark_id:"+markers[i].mark_id+"</p><p class=\"button\" onclick='Navigation("+markers[i].mark_id+");'>Навигация</p><h1>"+markers[i].name+"</h1><p>"+markers[i].description+"</p></div>";
			}
		}

		myMap.geoObjects.add(Dormitory_clusterer);
		Dormitory = true;
	}else{
		myMap.geoObjects.remove(Dormitory_clusterer);
		const dormitoryDivs = document.querySelectorAll('#dormitory');
		dormitoryDivs.forEach(div => div.remove());
		Dormitory = false;
	}
	});
});