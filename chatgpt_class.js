require('dotenv').config();
const { CoreClass } = require('@bot-whatsapp/bot');
// import OpenAI from "openai";


class ChatGPTClass extends CoreClass {
  queue = [];
  optionsGPT = { model: "gpt-4o-mini" };
  openai = undefined;

  constructor(_database, _provider) {
    super(null, _database, _provider)
    this.init().then();
  }

  /**
   * Esta funciona inicializa
   */
  init = async () => {
    const { ChatGPTAPI } = await import("chatgpt");
    this.openai = new ChatGPTAPI(
      {
        apiKey: process.env.OPENAI_API_KEY
      }
    );
  };



  /**
   * Esta funciona manda mensaje a wasa
   */
  handleMsg = async (ctx) => {

    const { from, body } = ctx

    const interaccionChatGPT = await this.openai.sendMessage(body, {
      conversationId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].conversationId,
      parentMessageId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].id,
    });

    this.queue.push(interaccionChatGPT);
    const parseMessage = {
      ...interaccionChatGPT,
      answer: interaccionChatGPT.text
    }


    this.sendFlowSimple([parseMessage], from)
  }
}

module.exports = ChatGPTClass;