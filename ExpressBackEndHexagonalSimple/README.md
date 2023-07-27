# Instrucciones para iniciar la aplicación

¡Bienvenido a nuestra aplicación en Express.js con aproximación a la arquitectura hexagonal!

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto donde se encuentra el archivo `package.json`.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

## Base de datos

Asegúrate de tener MongoDB instalado en tu sistema local, ya que nuestra aplicación se conectará a una base de datos de MongoDB.

## Iniciar la aplicación

Una vez que hayas instalado las dependencias, inicia la aplicación con el siguiente comando:


```
node main.js
```

Esto levantará la aplicación en `localhost` en el puerto `3000`.

## Descripción de la aplicación

Nuestra aplicación es una API en Express.js que sigue una aproximación a la arquitectura hexagonal. Está organizada en módulos, donde cada módulo representa una funcionalidad específica de la aplicación y tiene su representación en el ORM de las colecciones de MongoDB.

## Estructura de carpetas

La estructura de carpetas es la siguiente:

- modules
  -- client
    --- application
    --- domain
    --- infrastructure
  -- movie
    --- application
    --- domain
    --- infrastructure
  -- role
    --- application
    --- domain
    --- infrastructure
  -- user
    --- application
    --- domain
    --- infrastructure
- main.js
- module.js
- package.json

## API Endpoints

- `GET /roles`: Obtiene todos los roles disponibles.
- `GET /movies`: Obtiene todas las películas disponibles.
- `GET /movies/:name`: Busca películas por nombre. Acepta parte del nombre, y no distingue entre mayúsculas y minúsculas.
- `POST /user`: Crea un nuevo usuario utilizando el siguiente payload:

```json
{
  "first_name": "Juan",
  "last_name": "Pérez",
  "dni": "12345678",
  "birth_date": "1990-05-15",
  "phone": "5551234567",
  "role_id": "64b9833c9bb62d92db488936",
  "email": "juan.perez@example.com",
  "password": "secretpassword123",
  "user_name": "juany123"
}
```
El `role_id` debe ser el ID correspondiente a uno de los roles disponibles, obtenidos mediante la API de `/roles`.

## Notas adicionales
* Usamos la librería Mongoose para conectarnos a la base de datos de MongoDB y manejar los modelos de datos.
* Utilizamos Prettier para garantizar la consistencia en el formato y espaciado del código.