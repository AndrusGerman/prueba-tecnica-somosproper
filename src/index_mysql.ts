import { exit } from "process";
import { Config as InitConfig } from "./adapters/config/config";
import { MysqlStorage } from "./adapters/storage/mysql/mysql";
import {
  RecordDataMysqlRepository
} from "./adapters/storage/mysql/repository/recordData";
import { RecordData } from "./domain/recordData";
import { Config } from "./ports/config";
import { RecordDataRepository, RecordDataService } from "./ports/recordData";
import { RecordDataService as InitRecordDataService } from "./services/recordData";

// init config
const config: Config = new InitConfig();

// init database connection
const mysql = new MysqlStorage(config);
await mysql.Connect();

// repository
const recordDataRepository: RecordDataRepository = new RecordDataMysqlRepository(
  mysql
);

// services
const recordDataService: RecordDataService = new InitRecordDataService(
  recordDataRepository
);

// get all and print
console.log('==Imprimir Datos Iniciales==\n');
recordDataService.printData(await recordDataService.GetAll());

// add new elements
console.log('\n==Agregando nuevos datos==\n');
console.log('Zeus: => familia Gato');
recordDataService.Save(new RecordData(null,'Zeus',2))
console.log('Snoopy: => familia Fido\n');
recordDataService.Save(new RecordData(null,'Snoopy',9))


// print new data
console.log('==Imprimir Nuevos Datos==\n');
recordDataService.printData(await recordDataService.GetAll());


//finalizar
exit(0);


