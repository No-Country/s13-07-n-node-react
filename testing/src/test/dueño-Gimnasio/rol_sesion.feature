Feature: inicio de sesion y tipo de rol
    Como usuario Dueño/Empleados/Cliente del gym
    Quiero poder ingresar a la cuenta previamente registrada
    Para verificar datos y tipo de rol

Background: 
    Given estoy en la pagina inicio el usuario "maxi@mail.com" ingresa sus credenciales "Wxyz9876*" en la webApp "www.spotter.com"
    When el usuario es redirido a la pagina principal

Scenario: Verificacion de Roles de Usuario
    When las credenciales ingresadas corresponden al Rol:
        | Rol        |  
        | Dueño      | 
        | Empleado   |
        | Cliente    |
    Then se verifica la autenticacion y authorizacion sean adecuadas mostrados en perfil de usuario
