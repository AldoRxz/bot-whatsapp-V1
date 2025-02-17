require("dotenv").config();
const { createProvider } = require("@bot-whatsapp/bot");
// const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const ChatGPTClass = require('./chatgpt_class')


/** addAnswer
* const A = Obligatorio: Un texto "hola", array ["hola","como estas"]
* const B = Opcional null = es un objeto {media, delay, capture, buttons}
* const C = Opcional null = es una funcion callBack function!
* const D = Opcional = es un array de flujos hijos!
*
*/


const createBotChatGpt = async ({ provider, database }) => {
    return new ChatGPTClass(database, provider)
  }
  
  const main = async () => {
    const adapterDB = new MockAdapter();
  
    const adapterProvider = createProvider(BaileysProvider);
  
    createBotChatGpt({
      provider: adapterProvider,
      database: adapterDB,
    });
  
    QRPortalWeb();
  };
  
  main();


// const flujoDeProductos = addKeyword('catalogo')
//     .addAnswer('Estos son los productos que tenemos disponibles',)


// const flowPrincipal = addKeyword(EVENTS.WELCOME)
//     .addAnswer('🙌 Hola bienvenido mi nombre es Ana y por hoy sere la asistente de el Sr.Aldo',)
//     .addAnswer(
//         [
//             'Como tipo de conversacion querias tener con Aldo el dia de hoy?',
//             '👉 *catalogo* lista de productos',
//             '👉 *discord* unirte al discord y obten más información',
//         ],
//         null,
//         null,
//         [flujoDeProductos]
//         )



//////////////////////////////////////////////////////////////
// 
//              FLOW PRINCIPAL
//
// //////////////////////////////////////////////////////////



// const flowPrincipal = addKeyword(EVENTS.WELCOME)
//     .addAnswer('🙌 Hola bienvenido mi nombre es Ana y por hoy sere la asistente de el Sr.Aldo')
//     .addAnswer(

//         [
//             'Como tipo de conversacion querias tener con Aldo el dia de hoy?',
//             '👉 *cita* para agendar una cita con el Sr.Aldo algun dia de la semana',
//             '👉 *Catalogo* lista de productos',
//             '👉 *proyect*  para ver la lista de los proyectos que tiene activos',
//             '👉 *media* recibe informacion más visual',
//             '👉 *discord* unirte al discord y obten más información',
//         ],
//         null,
//         null,
//         [flowEnviarMedia]
//     )

// const flowEnviarMedia = addKeyword('media')
//     .addAnswer(
//         [
//             '👉 *image* te envio una imagen',
//             '👉 *video*  te envio un video',
//             '👉 *pdf* te envio un pdf',
//             '👉 *audio* te envio un audio`1',
//         ]
//     )

// const flowNotaVoz = addKeyword(EVENTS.VOICE_NOTE)
//     .addAnswer('Dame un momento para escuchar la nota de voz')

// const flowRecibirMedia = addKeyword(EVENTS.MEDIA)
//     .addAnswer('He recibido tu foto o video')
    
// const flowLocation = addKeyword(EVENTS.LOCATION)
//     .addAnswer('Ohh ya veo donde estas')

// const flowDocumento = addKeyword(EVENTS.DOCUMENT)
//     .addAnswer('Documento PDF recibido')

// const flowAction = addKeyword(EVENTS.ACTION)
//     .addAnswer('Documento PDF recibido')

// const flowCita = addKeyword('cita')
//     .addAnswer('Por favor dime el día y la hora para agendar una cita')

// const flowProyecto = addKeyword('proyect')
//     .addAnswer('Estos son los proyectos activos')



//////////////////////////////////////////////////////////////
// 
//              FLOW 
//
// //////////////////////////////////////////////////////////


// const main = async () => {
//     const adapterDB = new MockAdapter()
//     const adapterFlow = createFlow([flowPrincipal])
//     const adapterProvider = createProvider(BaileysProvider)

//     createBot({
//         flow: adapterFlow,
//         provider: adapterProvider,
//         database: adapterDB,
//     })

//     QRPortalWeb()
// }

// main()
