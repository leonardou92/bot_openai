import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';

// Configura el token de acceso de tu bot de Telegram
const botToken = 'token_api_telegram';

// Configura tu API Key de OpenAI
const openaiApiKey = 'token_api_openai';

// URL de la API de OpenAI para chat
const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';

// Inicializa el bot de Telegram
const bot = new TelegramBot(botToken, { polling: true });

// Evento de escucha de mensajes
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  try {
    // Enviar el estado "Escribiendo..." al usuario
    bot.sendChatAction(chatId, 'typing');

    // Realizar una solicitud a la API de OpenAI para chat
    const response = await axios.post(
      openaiApiUrl,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // Enviar la respuesta de OpenAI al chat de Telegram
    bot.sendMessage(chatId, reply);

    // Enviar el estado "cancel" para indicar que el bot ha dejado de escribir
    bot.sendChatAction(chatId, 'cancel');
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Lo siento, ha ocurrido un error.');

    // Asegurarse de enviar "cancel" en caso de error
    bot.sendChatAction(chatId, 'cancel');
  }
});