<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
    <title>Яндекс Карта</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1" />
  <link rel="shortcut icon" href="image/favicon-b.png" type="image/x-icon">
	<link rel="stylesheet" href="css/jkhkjhkjh.css">
    <!--
	 <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=361f015e-cb45-4f23-9fd0-07c0a8c70a19" type="text/javascript"></script>-->
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=5950e78e-f42b-4780-bb84-91bead5beddc" type="text/javascript"></script>
    <script src="js/index2.js" type="text/javascript"></script>

    <script type="text/javascript">

        window.onload = function() {

            setTimeout(function() {

                document.getElementById("preloader_malc").style.display = "none";

            }, 800);

        };

    </script>
    <script id="rendered-js">
        setInterval(() => {
            let element = document.querySelector('.google-dots');
            let newElement = element.cloneNode(true);
            element.parentNode.replaceChild(newElement, element);
        }, 6000);
        //# sourceURL=pen.js
    </script>
   </head>
<body>
  <div class="container">
      <div id="preloader_malc">
          <div>
              <div class="google-dots animate"><span class="blue"></span><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
          </div>
      </div>
  <nav class="card">

      <div class="Icons">
      <div class="logo"><img src="image/mini-logotip.png" class="logo_img"/>ДГТУ</div>
  </nav>
  <main class="card" id="map"></main>
  <div class="card">
      <h1>Точки на карте</h1>
      <div id="content1"></div>
</div>
  <div id="content2" class="card">
    <h1>Точки на карте</h1>
    <div id="showNavigation" class="button" onclick="createRipple(event);">Как Дойти</div>
    <div id="showMain" class="button" onclick="createRipple(event);">Основной корпус</div>
    <div id="showDormitory" class="button" onclick="createRipple(event);">Общежития</div>
    <div id="showPavilion" class="button" onclick="createRipple(event);">Корпуса</div>
</div>
      <footer class="card"><div class="feedback">Обратная связь:<div class="telegram" id="telegram" onclick="createRipple(event);">Telegram</div><div class="telegram_bot" onclick="createRipple(event);">BOT</div></div></footer>
</div>
<script src="js/javascript.js"></script>

    </body>
</html>