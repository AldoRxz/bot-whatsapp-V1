const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAnswer('🙌 Hola bienvenido mi nombre es Ana y por hoy sere la asistente de el Sr.Aldo')
    .addAnswer(
        [
            'Como tipo de conversacion querias tener con Aldo el dia de hoy?',
            '👉 *cita* para agendar una cita con el Sr.Aldo algun dia de la semana',
            '👉 *proyect*  para ver la lista de los proyectos que tiene activos',
            '👉 *media* recibe informacion más visual',
            '👉 *discord* unirte al discord y obten más información',
        ],
        null,
        null,
        [flowEnviarMedia]
    )

const flowEnviarMedia = addKeyword('media')
    .addAnswer(
        [

        ]
    )

const flowNotaVoz = addKeyword(EVENTS.VOICE_NOTE)
    .addAnswer('Dame un momento para escuchar la nota de voz')

const flowRecibirMedia = addKeyword(EVENTS.MEDIA)
    .addAnswer('He recibido tu foto o video')
    
const flowLocation = addKeyword(EVENTS.LOCATION)
    .addAnswer('Ohh ya veo donde estas')

const flowDocumento = addKeyword(EVENTS.DOCUMENT)
    .addAnswer('Documento PDF recibido')

const flowAction = addKeyword(EVENTS.ACTION)
    .addAnswer('Documento PDF recibido')



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowNotaVoz])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
