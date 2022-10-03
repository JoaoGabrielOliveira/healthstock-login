import typeorm from 'typeorm';

export const PORT = process.env.PORT || 8080;
export const DATABASE_TYPE = "sqlite";
/**
 * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
 */
export const DATABASE_URL = "database/database.sqlite";

/**
* Data Source é onde está configurações para conectar no banco de dados.
*/
export let DataSource = new typeorm.DataSource({
   type: DATABASE_TYPE,
   database: DATABASE_URL,
   logger: true,
   entities: [
     "src/models/*.js"
   ],
   synchronize: true
});