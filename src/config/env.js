export default {
    HOST:'localhost',
    PORT:process.env.PORT || 8080,
    LOG_ENDPOINT: process.env.LOG || 'http://localhost:10000',
    /** @type { number } */
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,

    /**
 * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
 */
    DATABASE_TYPE:"sqlite",

    /**
     * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
     */
    DATABASE_URL:"src/database/database.sqlite"
}