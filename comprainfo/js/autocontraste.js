$('#link-alto-contraste').click(function(){
   $('link[href^=/css/estilo.css]').attr('href', '/css/estiloAltoContraste.css');
});


// 1*
var altoContraste = document.createElement('link');

// 2*
altoContraste.rel = 'stylesheet';
altoContraste.href = '/css/estiloAltoContraste.css';

// 3*
document.body.appendChild(altoContraste);