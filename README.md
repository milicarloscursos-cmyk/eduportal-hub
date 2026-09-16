# EduPortal Hub

Crea una aplicación web llamada “Sistema Integral de Gestión Educativa”, que funcione como el PORTAL PRINCIPAL o PANTALLA DE INICIO de un sistema integral para la gestión de un establecimiento educacional.

OBJETIVO PRINCIPAL

La aplicación debe funcionar como un menú central desde el cual la Dirección y los usuarios autorizados puedan acceder a diferentes módulos y aplicaciones educativas que ya fueron desarrolladas de manera independiente.

IMPORTANTE:

NO reconstruyas ni modifiques las aplicaciones internas existentes.

El objetivo de este proyecto es crear solamente el PORTAL PRINCIPAL y conectar cada módulo mediante enlaces/URLs configurables.

MÓDULOS PRINCIPALES

El menú inicial debe mostrar visualmente, mediante tarjetas o botones grandes y profesionales, los siguientes módulos:

1. TUTOR DE IA

Descripción:

Asistente o tutor de Inteligencia Artificial para apoyar a estudiantes y docentes.

2. PIPELINE DE ATENCIÓN DE APODERADOS

Descripción:

Sistema para registrar, gestionar y hacer seguimiento de situaciones que requieren intervención con estudiantes y apoderados, por ejemplo:

- Inasistencia

- Atrasos

- Calificaciones

- Conducta

- Otras situaciones

Debe permitir acceder al sistema existente de Pipeline.

3. EVALUACIONES Y PRUEBAS

Descripción:

Módulo destinado a la creación y gestión de evaluaciones, pruebas y otros instrumentos de evaluación mediante Inteligencia Artificial.

4. ASISTENCIA

Descripción:

Módulo para consultar y gestionar información relacionada con asistencia, inasistencias y atrasos de los estudiantes.

5. NOTAS

Descripción:

Módulo para consultar y gestionar las calificaciones de los estudiantes.

6. PANEL DE DIRECCIÓN

Descripción:

Acceso a una vista ejecutiva para que la Dirección pueda visualizar información relevante de los distintos módulos y apoyar la gestión y toma de decisiones.

DISEÑO DEL PORTAL

Crear una interfaz moderna, profesional, limpia y elegante, apropiada para ser presentada a la Dirección de un establecimiento educacional.

La pantalla inicial debe transmitir la idea de:

“Un sistema integral que reúne información, gestión, seguimiento, inteligencia artificial y apoyo a la toma de decisiones.”

Incluir:

- Encabezado institucional.

- Nombre: “Sistema Integral de Gestión Educativa”.

- Subtítulo: “Plataforma integrada para la gestión, seguimiento y apoyo a la comunidad educativa”.

- Menú principal mediante tarjetas visuales.

- Iconos representativos para cada módulo.

- Diseño responsive para computador, tablet y celular.

- Navegación sencilla e intuitiva.

- Animaciones suaves y profesionales al pasar sobre las tarjetas.

- Botones claramente identificables.

ESTRUCTURA DE NAVEGACIÓN

Al hacer clic sobre cada tarjeta o botón, debe abrirse el proyecto correspondiente.

Las URLs de cada aplicación NO deben quedar escritas directamente dentro de los componentes de la interfaz.

Crear una sección de configuración centralizada llamada:

“Configuración de módulos”

En ella deben existir campos independientes para ingresar o modificar las URLs de:

- Tutor de IA

- Pipeline de Atención de Apoderados

- Evaluaciones y Pruebas

- Asistencia

- Notas

- Panel de Dirección

Esto permitirá que posteriormente pueda conectar los proyectos que fueron creados en diferentes cuentas de Lovable y/o publicados mediante GitHub u otros servicios.

IMPORTANTE SOBRE LOS ENLACES

No inventes URLs.

Mientras una URL no haya sido configurada, mostrar el módulo como:

“Próximamente”

y deshabilitar temporalmente su botón de acceso.

Cuando se agregue una URL válida, el botón debe quedar automáticamente habilitado.

TIPO DE APERTURA

Por defecto, al seleccionar un módulo, abrir la aplicación correspondiente en una nueva pestaña del navegador para que el usuario pueda regresar fácilmente al portal principal.

PANEL DE DIRECCIÓN

El portal debe contemplar desde el inicio la posibilidad de que la Dirección tenga un acceso especial denominado:

“Panel de Dirección”

Este panel posteriormente podrá integrar información proveniente de:

- Asistencia

- Notas

- Atrasos

- Conducta

- Atención de apoderados

- Evaluaciones

- Otros indicadores relevantes

Por ahora NO es necesario desarrollar toda esa integración de datos.

Dejar preparada la estructura para que pueda incorporarse posteriormente.

SEGURIDAD Y ARQUITECTURA

Diseñar la aplicación de manera modular para que posteriormente pueda incorporar:

- Inicio de sesión.

- Diferentes perfiles de usuario.

- Permisos según rol.

- Dirección.

- Docentes.

- Estudiantes.

- Apoderados.

- Administradores.

Por ahora no es necesario implementar completamente estos perfiles, pero la arquitectura debe quedar preparada para ello.

INTEGRACIÓN DE PROYECTOS EXISTENTES

Considera que los módulos pueden estar actualmente desarrollados como proyectos independientes.

El portal debe actuar como una “puerta de entrada” o “hub” que permita acceder a ellos sin necesidad de reconstruirlos.

La prioridad es que el sistema sea fácilmente escalable y que posteriormente sea posible reemplazar una URL por otra sin tener que modificar el diseño o reconstruir la aplicación.

EXPERIENCIA DE USUARIO

La pantalla principal debe ser muy sencilla:

USUARIO INGRESA

↓

VE EL SISTEMA INTEGRAL

↓

SELECCIONA EL MÓDULO

↓

ACCEDE A LA APLICACIÓN CORRESPONDIENTE

Evita una interfaz recargada.

Debe sentirse como un verdadero sistema institucional y no como una colección de enlaces.

PREPARACIÓN PARA FUTURAS INTEGRACIONES

Deja preparada la arquitectura para que en una segunda etapa pueda evolucionar desde un portal de enlaces hacia una plataforma realmente integrada.

En el futuro debería ser posible conectar bases de datos y APIs para que información de asistencia, notas, evaluaciones, atención de apoderados y otros módulos pueda visualizarse de manera centralizada.

NO IMPLEMENTAR ESA INTEGRACIÓN AHORA.

Primero construir un portal sólido, profesional, funcional y escalable.

RESULTADO ESPERADO

Entregar una aplicación funcional que pueda utilizarse como DEMO frente a la Dirección de un establecimiento educacional y que permita demostrar visualmente cómo diferentes soluciones de Inteligencia Artificial y gestión educativa pueden convivir dentro de una misma plataforma.

El resultado debe verse profesional, institucional, moderno y preparado para crecer.

Antes de finalizar, verifica que:

- Todos los módulos aparezcan correctamente.

- Los botones funcionen.

- Las URLs puedan configurarse desde un único lugar.

- Los módulos sin URL aparezcan como “Próximamente”.

- No existan URLs inventadas.

- El diseño sea responsive.

- La navegación sea clara.

- La estructura quede preparada para futuras integraciones.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f57b5e25-85fb-4026-a6e8-50474dff93dc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
