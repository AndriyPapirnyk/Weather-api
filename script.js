let KEY = 'dea9c36d4ff318cfb04203de9c44a054';
let city;
let inpValue;
let c1;
let c2;
c1 = '#' + Math.floor(Math.random()*16777215).toString(16);
c2 = '#' + Math.floor(Math.random()*16777215).toString(16);
$('.wrap').css('background', 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)')
$('.weatherInfo').hide()
$('.findBtn').click(function(){
    if(cityInp.value === '') {
        alert('Enter the city!');
    }  else {
        city = cityInp.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.cod);
          if(data.cod === 200) {
            inpValue = true;
            c1 = '#' + Math.floor(Math.random()*16777215).toString(16);
            c2 = '#' + Math.floor(Math.random()*16777215).toString(16);
            $('.wrap').css('background', 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)')
            $('.weatherInfo').fadeIn(800);
            $('.card').css('left', '79%');
            $('.cityTxt').text(data.name);
            $('.countryTxt').text(data.sys.country);
            $('.actTemp').text((data.main.temp - 273).toFixed(2) + ' ' + '°C');
            $('.feelTemp').text((data.main.feels_like - 273).toFixed(2) + ' ' + '°C');
            $('.skyTxt').text(data.weather[0].description);
            $('.windTxt').text('Wind speed: ' + data.wind.speed + ' m/s');
            $('.preTxt').text('Pressure: ' + data.main.pressure + ' hPa');
            let windDeg = data.wind.deg + 'deg';
            $('.windImg').css('transform',  `rotate(${windDeg})` );
            let skyVal = data.weather[0].icon + '.png';
            console.log(skyVal);
            $('.skyImg').css('background-image', `url('${'img/'+ skyVal}')`); 
          } else {
            alert('Incorrect data!');
          }
        });
    };
});
$('#cityInp').click(function(){
    if(inpValue === true) {
        c1 = '#' + Math.floor(Math.random()*16777215).toString(16);
        c2 = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('.wrap').css('background', 'linear-gradient(90deg, ' + c1 + '  0%, ' + c2 + ' 100%)');
        inpValue = false;
    } else {};
    $('.card').css('left', '50%')
    $('.weatherInfo').fadeOut(100);
});

// °C  `rorate(${data.wind.deg + 'deg'})`
