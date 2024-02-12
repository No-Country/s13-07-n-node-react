Feature: Verificacion status de Links en la webApp
    Como usuario
    Quiero verificar que todos los enlaces de mi webApp funcionan correctamente
    Para garantizar una navegación sin problemas

Background: inicio se sesion
    Given el usuario 'a' accede con su contraseña 'b' en la web app 'c'

@smokeTest @nav_id:01
Scenario: Verificar estado de los enlaces en la página principal
    Given que estoy en la página principal de la aplicación
    When inspecciono todos los enlaces en la página
    Then cada enlace debería responder con un estado HTTP 200 OK