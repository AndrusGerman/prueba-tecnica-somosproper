import { MemoryStorage } from "./adapters/storage/memory/memory";
import { RecordDataMemoryRepository } from "./adapters/storage/memory/repository/recordData";
import { RecordData } from "./domain/recordData";
import { RecordDataRepository, RecordDataService } from "./ports/recordData";
import { RecordDataService as InitRecordDataService } from "./services/recordData";

// init storage
const memoryStorage = new MemoryStorage();
await memoryStorage.Migration();

// repository
const recordDataRepository: RecordDataRepository = new RecordDataMemoryRepository(
  memoryStorage
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
