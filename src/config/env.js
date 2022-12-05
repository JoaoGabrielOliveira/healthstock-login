export default {
    HOST:'localhost',
    PORT:process.env.PORT || 8080,
    LOG_ENDPOINT: process.env.LOG || 'http://localhost:10000',
    /** @type { number } */
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_PASS: process.env.EMAIL_PASS,

    /**
 * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
 */
    DATABASE_TYPE:"sqlite",

    /**
     * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
     */
    DATABASE_URL:"src/database/database.sqlite"
}