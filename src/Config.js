import typeorm from 'typeorm';
import fs from 'fs';
export const PORT = process.env.PORT || 8080;
export const DATABASE_TYPE = "sqlite";
/**
 * As variaveis DATABASE_TYPE e DATABASE_URL estão sendo settedas no arquivo .env
 */
export const DATABASE_URL = "src/database/database.sqlite";

/**
* Data Source é onde está configurações para conectar no banco de dados.
*/
export const DataSource = new typeorm.DataSource({
   type: DATABASE_TYPE,
   database: DATABASE_URL,
   logger: true,
   entities: [
     "src/models/*.js"
   ],
   synchronize: true
});

export function StartDatabase(){
  try {
    if(fs.existsSync(DATABASE_URL)){
      DataSource.initialize();
      console.log("Banco de dados foi iniciado com sucesso!");
    }
  } catch (error) {
      console.error("Aconteceu um erro ao inciar banco de dados", err)
  }
}