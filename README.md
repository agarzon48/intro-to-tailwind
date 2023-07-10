# intro-to-tailwind

Este repo se ha diseñado para enseñar los conceptos básicos de tailwindcss.
También incluye otros detalles de interés, como:

1. drag & drop
1. OOP
1. IndexedDB

## Iniciar el proyecto

1. Instalar dependencias (opcional si solo se va a ver tailwind)

```bash
npm install
```

2. Para compilar tailwind:

```bash
npm run tailwind
```

3. Para lanzar el proyecto (server con live reload):

```bash
npm run serve
```

### Notas

1. Para la versión pre-OOP, importar solo index-initial.js

## Tailwind

El proyecto permite explicar:

1. Proceso de instalación y configuración de tailwindcss
   1. npm install -D tailwindcss
   1. npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   1. tailwind.config.js
   1. clases de utilidad básicas (index.html)
   1. reutilización de clases (input.css)

## Drag & drop

El proyecto permite explicar:

1. [Drag operations](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drag_effects)
1. draggable attribute (marca el elemento como arrastrable)
1. Escuchar el evento dragstart (describir la operación e incluir datos)
1. Escuchar eventos dragenter y dragover (e => e.preventDefault())
1. Escuchar eventos dragleave (opcional)
1. Escuchar eventos drop y actualizar datos/UI

## OOP

El proyecto permite explicar:

1. Clases en js
1. this
1. Métodos y .bind

## IndexedDB

1. Abrir una base de datos
1. Crear un objeto store
1. Iniciar transacciones y realizar peticiones a la base de datos
1. Esperar a que la operación se complete
1. Trabajar con los resultados
