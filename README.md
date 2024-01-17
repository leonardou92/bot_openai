# Bot de Telegram con OpenAI
Este proyecto implementa un bot de Telegram que utiliza la API de OpenAI para proporcionar respuestas inteligentes y conversaciones naturales. El bot está construido en Node.js y hace uso de las bibliotecas node-telegram-bot-api y axios para interactuar con la plataforma de Telegram y la API de OpenAI, respectivamente.

# Configuración
Antes de utilizar el bot, asegúrate de configurar correctamente las siguientes variables en el archivo del código fuente:

## Bot Token de Telegram: 
Obtén el token de acceso de tu bot de Telegram y configúralo en la variable botToken:

Abre la aplicación de Telegram y busca el bot llamado "BotFather".
Inicia una conversación con el BotFather y utiliza el comando /newbot para crear un nuevo bot.
Sigue las instrucciones para proporcionar un nombre y un nombre de usuario para tu bot.
Al finalizar, el BotFather te proporcionará un token de acceso. Guarda este token, ya que lo necesitarás en tu aplicación.

## API Key de OpenAI: 
Regístrate en OpenAI y obtén tu clave API. Configura la clave en la variable openaiApiKey.

URL de la API de OpenAI: La URL de la API de OpenAI para chat ya está configurada como openaiApiUrl, pero asegúrate de que sea la versión y ruta correctas según la documentación de OpenAI.

# Uso
Instala las dependencias:

    npm install
    npm install telegram-bot
    
Ejecuta el bot:

    node app.js
    
¡Comienza a interactuar con el bot en Telegram y observa cómo proporciona respuestas utilizando OpenAI!

Funcionalidades
Conversación Natural: El bot utiliza el modelo GPT-3.5-turbo de OpenAI para mantener conversaciones de manera natural.

Manejo de Errores: El bot está diseñado para manejar errores y notificar al usuario en caso de problemas.

Contribuir
Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un problema o enviar una solicitud de extracción. ¡Tu contribución es bienvenida!
