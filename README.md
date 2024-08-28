# Encriptador de Texto
Este proyecto es un encriptador y desencriptador de texto simple implementado con HTML, CSS y JavaScript. Su objetivo es transformar un texto introducido por el usuario en un formato encriptado basado en reglas específicas, y luego permitir la desencriptación del mismo.

## Características

- **Interfaz del usuario:**
  - Dos áreas de texto: Una para ingresar el texto a encriptar y otra para mostrar el texto desencriptado.
  - Tres botones: Uno para encriptar, otro para desencriptar el texto y otro para copiar el texto encritado o desencriptado.

- **Función de encriptación:**
  - Transforma vocales a cadenas de texto más largas basadas en un conjunto de reglas predeterminadas.

- **Función de desencriptación:**
  - Invierte la encriptación, devolviendo el texto a su forma original.

## Estructura del Proyecto

- **HTML (index.html):** Contiene la estructura básica del proyecto, incluyendo dos áreas de texto (textarea) y tres botones.
- **CSS (style.css):** Define el estilo visual del proyecto, con fuentes, colores, y layout. Incluye reglas de estilo para pantallas pequeñas (max-width: 720px).
- **JavaScript (app.js):** Maneja la lógica para encriptar y desencriptar texto utilizando expresiones regulares. Se enlazan eventos de clic a los botones para realizar las operaciones de encriptación, desencriptación  y que se habilite el boton de copiar.

## Función de Encriptación

- `a` se convierte en `ai`
- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

Por ejemplo: 
El texto "hola" se encriptará como "hoberlai".
El texto "buenos dias" se encriptara como "bufatenternobers dimesais".

## Función de Desencriptación

- `ai` se convierte en `a`
- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

Por ejemplo:
El texto "hoberlai" se desencriptará de nuevo a "hola".
El texto "bufatenternobers dimesais" se desencriptara como "buenos dias". 


## Instrucciones de Uso

1. **Encriptar un texto:**
    - Escriba el texto que deseas encriptar en el área de texto que dice "Ingresa el texto aquí" a la izquierda.
    - Haz clic en el botón "Encriptar".
    - El texto encriptado aparecerá en el área de texto a la derecha.

2. **Desencriptar un texto:**
    - Copie el texto encriptado con el boton "copiar" en el área de texto a la derecha y verifique si copio cuando el mensaje del boton cambia a "¡El texto a sido copiado!".
    - Pegue el texto antes copiado en el area de texto del lado izquierdo y haz click en el botón "Desencriptar".
    - El texto desencriptado aparecerá en el área de texto a la derecha.
