import { RecordData } from "../../../../domain/recordData";
import { MysqlStorage } from "../mysql";

export class RecordDataMysqlRepository {
  constructor(private mysql: MysqlStorage) {}

  async GetAll(): Promise<RecordData[]> {
    return new Promise((resolve, reject) => {
      this.mysql
        .conn()
        .query(
          `SELECT id,nombre,idPadre FROM RecordsData`,
          (err, result, fields) => {
            if (err) return reject(err);

            const resultParse = result.map(
              (data) => new RecordData(data.id, data.nombre, data.idPadre)
            );

            resolve(resultParse);
          }
        );
    });
  }

  async Save(recordData: RecordData): Promise<void> {

    return new Promise((resolve,reject) => {
      this.mysql.conn().query(`INSERT INTO somosproper.RecordsData 
        (nombre,idPadre) VALUES ('${recordData.nombre}', ${recordData.idPadre});`,(err =>{
          if (err) return reject(err);
          resolve();
        }))
    })
  }
}
