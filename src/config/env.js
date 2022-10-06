export default {
    PORT:process.env.PORT || 8080,

    /**
 * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
 */
    DATABASE_TYPE:"sqlite",

    /**
     * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
     */
    DATABASE_URL:"src/database/database.sqlite"
}