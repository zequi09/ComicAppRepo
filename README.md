# Este proyecto hace parte de la prueba técnica para Frontend Developer

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) que permite crea una plantilla básica de un proyecto en React.

## Pasos para ejecutar el proyecto

1. Necesitamos descargar el proyecto para ejecutarlo de manera local, para eso necesitamos git que en caso de no tenerlo los podemos descargar [aquí](https://git-scm.com).

2. Una vez tengamos git instalado podemos clonar el proyecto abriendo la terminal del sistema operativo en el que estés y ejecutar el siguiente comando:

```bash
git clone https://github.com/zequi09/ComicAppRepo.git
```

3. Seguidamente nos ubicaremos en la carpeta del proyecto ejecutanto el seguiente comando:

```bash
cd ComicAppRepo
```

4. Nos pondremos en la rama main con el comando:

```bash
git checkout main
```

5. **Paso Opcional:** Si deseas ver y modificar el código puedes abrir la carpeta "ComicAppRepo" con el editor de código que uses.

## Ejecutar el proyecto

6. Para ejecutar el proyecto necesitamos node instalado, sino cuentas con node puedes descargarlo [aquí](https://nodejs.org/es/download/).

7. Inicialmente necesitas instalar las dependencias de desarrollo con las que cuenta el proyecto desde donde quedamos en el paso 3 es decir dentro de la carpeta **ComicAppRepo** y ejecuamos:

```bash
npm install
```

Este paso puede tardar unos segundos.

8. Cuando esté terminado el paso anterior sin ningún error ejecutaremos:

```bash
npm start
```

para ejecutar el proyecto y poder interacturar con este.

## Interacción con la aplicación

Del proceso anterior el navegador debió abrir una pestaña con la url:

```bash
http://localhost:3000
```

**Si el puerto llega a estar ocupado por alguna razón, la terminal nos preguntará si queremos ejecutarlo en en otro puerto, solo es confirmar y verificará los siguientes puertos, es decir, el 3001 y así sucesivamente.**

- Al abrilo veremos un contenedor que nos arrojará un comic aleatorio y su título y justo debajo un espacio donde puedes calificar el comic que acabas de ver.
- Una vez calificado la app te agradecerá por la calificación y te permitirá ejecutar dos acciones.
- La primera cerrar el popUp y quedarnos en ese comic o (la segunda) generar otro comic aleatoriamente.

- Además se aplicó un pequeño loading mientras se la petición a la API de comics.

# Autor

- Ezequiel Mantilla Restrepo
