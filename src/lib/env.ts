import zod from "zod"

const envschema = zod.object({
    DATABASE_URL: zod.string().nonempty(),
GOOGLE_CLIENT_ID: zod.string().nonempty(),
GOOGLE_CLIENT_SECRET: zod.string().nonempty(),
NEXTAUTH_URL: zod.string().nonempty(),
NEXTAUTH_SECRET: zod.string().nonempty()
})

export const env = envschema.parse(process.env)