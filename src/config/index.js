import typeorm from 'typeorm';
import fs from 'fs';
import env from './env.js';
import axios from 'axios';
import nodemailer from 'nodemailer';

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

export async function SendEvent(message, data, level = 'info'){
  console.log(level, message)
  axios.post(env.LOG_ENDPOINT, {
    "origin":'login',
    "host":`${env.HOST}:${env.PORT}`,
    "message":message,
    "level":level,
    "data": data
}).catch(err => {
  console.log("Serviço de eventos está fora do ar!", err);
 })
}

export const transporter = nodemailer.createTransport({
  service: enviroment.EMAIL_SERVICE,
  auth: {
    user: enviroment.EMAIL_ADDRESS,
    pass: enviroment.EMAIL_PASS
  }
});