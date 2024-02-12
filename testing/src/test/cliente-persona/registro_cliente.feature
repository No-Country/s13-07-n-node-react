Feature: Registro stadandar de cliente/usuario
    Como cliente/usuario del gym
    quiero poder registrarme y acceder a todos los servicios elegidos, pago de forma rapida y segura
    Para gestion de finanzas y entrenamiento 

Scenario: Registro de Nuevo Cliente
    Given estoy en la página de registro de la aplicación
    When ingreso mis detalles de registro (nombre, correo electrónico, contraseña, etc.)
    And confirmo el registro
    Then debería recibir un correo electrónico de confirmación
    And debería ser redirigido a la página de inicio de sesión

Scenario: Inicio de Sesión Después del Registro
    Given estoy en la página de inicio de sesión
    When ingreso mis credenciales recién registradas
    And confirmo el inicio de sesión
    Then debería ser redirigido al panel de control del cliente verificando Rol y datos personales

Scenario: Recuperación de Contraseña
    Given estoy en la página de inicio de sesión
    When selecciono la opción para recuperar mi contraseña
    And ingreso mi correo electrónico registrado
    And confirmo la solicitud de recuperación de contraseña
    Then debería recibir un correo electrónico con instrucciones para restablecer mi contraseña
