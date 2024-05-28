# TestSimetricaConsulting

## Descripción del Proyecto

Desarrollo una aplicación web frontend utilizando Angular 17 que simule la gestión de usuarios y tareas. La aplicación debe hacer uso de los environments de Angular para compilar a diferentes ambientes (dev, qa, prod), utilizar SOLID principles, autenticación con JWT, HTTP para las solicitudes de datos mockeados, Angular Material para el CSS, ser responsive, implementar lazy loading y tener un código limpio y bien organizado que haga uso de interfaces, enumerables, entre otros. Además, se requiere el uso de Jest para las pruebas unitarias.

En este caso estoy usando algunas apis de 
<https://dummyjson.com/docs> que me permiten autenticarme y consumir informacion de usuario y tareas.

Desplegue el proyecto en netlify al cual pueden acceder con el siguiente enlace: <https://test-sc-roberto-chacon.netlify.app>

## Requisitos Previos
Node.js y npm: Asegúrate de tener Node.js y npm instalados. Puedes descargarlo e instalarlo desde nodejs.org.

Angular CLI: Instala Angular CLI globalmente si no lo tienes ya instalado. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

`npm install -g @angular/cli`

## Pasos para bajar y correr el proyecto

Clonar el Repositorio: Abre tu terminal y clona el repositorio del proyecto desde GitHub usando el comando git clone y la url del repositorio.

`git clone https://github.com/robertochacon/test-simetrica-consulting`

Navegar al Directorio del Proyecto: Cambia el directorio a la carpeta del proyecto recién clonado.

`cd proyecto-angular`

Instalar Dependencias: Ejecuta el siguiente comando para instalar las dependencias del proyecto listadas en el archivo package.json.

`npm install`

Ejecutar el Proyecto: Una vez que las dependencias se han instalado, puedes ejecutar el proyecto con el siguiente comando:

## Entornos y acceso al Proyecto

### Entornos/Ambientes

- #### LOCAL
`ng serve`
- #### QA
`ng serve --configuration=qa`
- #### PRODUCCION
`ng serve --configuration=production`

La url declarada en los entornos apuntan a la misma url. El objetivo principal se enfoca en el uso de diferentes ambientes.

Abrir la siguiente url en el navegador  [http://localhost:4200](http://localhost:4200) 


## Ejecutar pruebas unitarias

Para la ejecucion de las pruebas unitarias utilizando Jest ejecutar el sigiente comando en la consola: 

`ng test`

- #### Nota: las pruebas unitarias aun no estan listas.

