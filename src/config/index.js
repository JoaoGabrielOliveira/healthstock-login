import typeorm from 'typeorm';
import fs from 'fs';
import env from './env.js';

export const enviroment = env;

/**
* Data Source é onde está configurações para conectar no banco de dados.
*/
export const DataSource = new typeorm.DataSource({
   type: env.DATABASE_TYPE,
   database: env.DATABASE_URL,
   logger: true,
   entities: [
     "src/models/*.js"
   ],
   synchronize: true
});

export function StartDatabase(){
  try {
    if(fs.existsSync(env.DATABASE_URL)){
      DataSource.initialize();
      console.log("Banco de dados foi iniciado com sucesso!");
    }
  } catch (error) {
      console.error("Aconteceu um erro ao inciar banco de dados", error)
  }
}