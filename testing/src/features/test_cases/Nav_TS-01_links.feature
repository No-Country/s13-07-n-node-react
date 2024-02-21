Feature: Nav | TS 01 | Verificacion de propiedades y status en los links/enlaces de redireccion interna
    Verificar que todos los enlaces en la pagina funcionen correctamente para asegurar de una navegacion adecuada
    * Protocolo de navegacion
    * Status de conexion
    * Redireccion de los enlaces

Background: inicio de sesion
    Given el usuario 'userA@mail.com' accede con su contraseña 'wxyz1234*' en la web app 'www.spooter.com'

@Nav @TS-01 
Scenario: Verificar status y propiedades de todos los enlaces por pagina
    Given accedo en la pagina "<link>"
    When se realiza clic en todos los enlaces buscados
    Then se muestra el total de enlaces encontrados 
    Then deben redirigir corretamente a la url de destino
    Then deben devolver un codigo de estado HTTP 200 OK
    Then deben ser accesible y cargar correctamente
    Then los enlaces debe utilizar el protocolo correcto (HTTP o HTTPS)
Examples:
    | link                   |  
    | https://www.google.com | 
