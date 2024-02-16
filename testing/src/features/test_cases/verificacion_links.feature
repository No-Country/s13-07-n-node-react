Feature: Verificacion status de Links/Enlaces en la webApp
    Como usuario
    Quiero verificar que todos los enlaces de mi webApp funcionan correctamente
    Para garantizar una navegación sin problemas

Background: inicio se sesion
    Given el usuario 'a' accede con su contraseña 'b' en la web app 'c'

@smokeTest @id:00
Scenario: Verificar un enlace
    Given que el usuario esta en la pagina de inicio
    When el usuario hace clic en el enlace "Acerca de nosotros"
    Then el usuario deberia ser redirido a la pagina "Acerca de nosotros"

@smokeTest @id:01
Scenario: Verificar estado de los enlaces en la página principal
    Given que estoy en la página principal de la aplicación
    When inspecciono todos los enlaces en la página
    Then cada enlace debería responder con un estado HTTP 200 OK al invocarlos