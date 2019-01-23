# AngularJS-Gulp-Jade-Sass
Aplicación básica con un login simulado para buscar películas y elegir algunas de ellas como favoritas.

# Criterios y tecnologías utilizadas
- Obtención de datos a través del API REST: http://www.omdbapi.com/
- Visualización de películas, peticiones realizadas con promesas
- Angular JS 1.4.14
- Visualización de detalle de cada película reutilizando el modelo en la vista
- Peliculas favoritas almacenadas en el localstorage.
- Usuarios almacenados en el sessionstorage
- Bootstrap 3
- Jade
- Versión de JavaScript es6
- Gestión de dependencias con Bower
- Gestión de flujo de trabajo con gulp

# Instalación y ejecución
> npm install

> npm start

Tras instalar las dependencias y arrancar la aplicación se generará una carpeta /dist con los bundles y la compilación generada. La aplicación estará disponible en localhost:3000.

# Datos a tener en cuenta
No se ha realizado ninguna clase de almacenamiento persistente ni se ha preparado la aplicación para ser capaz de mantener datos tras refrescar la página, por lo que se recomienda navegar utilizando los propios enlaces de la aplicación.

No se realiza ninguna comprobación sobre el login, al introducir cualquier nombre de usuario y contraseña este pasará a quedar almacenado en el session storage. Es posible desloguearse, volver a hacerlo con el mismo nombre de usuario y acceder a las películas que hayan sido seleccionadas como favoritas. 
