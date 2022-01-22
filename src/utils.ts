const {Translate} = require('@google-cloud/translate').v2

type Config = {
    privateKey: string
    clientEmail: string
    projectId: string
}

let translate: any

export const setConfig = async ({
                                    clientEmail,
                                    privateKey,
                                    projectId
                                }: Config) => {
    translate = new Translate({
        credentials: {
            private_key: privateKey,
            client_email: clientEmail
        },
        projectId: projectId
    })
}
