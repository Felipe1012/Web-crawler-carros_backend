# Watson Discovery Demo: Web crawler carros

IBM Watson Discovery facilita la construcción de aplicaciones de exploración cognitivas y basadas en la nube que desbloquean los insights accionables que hay ocultos en los datos no estructurados. Esta demo utiliza usa una de las maneras para la ingesta de datos a Watson Discovery, un web crawler, para tomar información de tucarro.com y minar el contenido en cuanto a características de automóviles que se ofertan actualmente como lo son: precio, modelo, kilometraje, etc… 

## Arquitectura 🚀
![WhatsApp Image 2020-07-21 at 11 08 05 AM](https://user-images.githubusercontent.com/46906169/88103650-e6f2dc80-cb66-11ea-9963-32ef5e304002.jpeg)

### Pre-requisitos 📋

Para comenzar con esta demo es necesario:
- Tener una cuenta de IBM cloud, si aun no está creada en el siguiente enlace la puede crear [AQUI](https://cloud.ibm.com/).
- Crear un servicio de **Object storage**.
- Crear un servicio de **Watson Discovey**.
- Crear un servicio de **Natural Language Understanding**.
- Crear un servicio de **Knowlegde Studio**.

### Instalación 🔧

Es necesario cambiar las credenciales en el proyecto de los servicios nuevos que se creron en la cuenta personal de IBM cloud.
1. Credenciales Watson Discovery.
En el archivo ***params.json*** se encuentran las credenciales de los servicios cloud.

```
  "url": "https://api.us-east.discovery.watson.cloud.ibm.com/instances/3bb82015-27f7-4c67-be71-758ce4e10994",
  "iam_apikey": "ypt5FzCEvgK8SACrfX-oXhQfiEKBxuFBUNbuMH9jGxry"
```
![credenciales](https://user-images.githubusercontent.com/46906169/88110643-2bd04080-cb72-11ea-855b-bc3e31472421.png)

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

* [IBM Watson Discovery](https://cloud.ibm.com/docs/discovery?topic=discovery-sources#connectwebcrawl) - Crawler web 
* [Natural Language Understanding](https://www.ibm.com/co-es/cloud/watson-natural-language-understanding) - 

## Wiki 📖
 [Uso de Api Watson Discovery](https://cloud.ibm.com/apidocs/discovery)
 [Uso de Api NLU](https://cloud.ibm.com/apidocs/natural-language-understanding)
## Autores ✒️

Equipo tecnico Data & AI IBM Colombia

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

