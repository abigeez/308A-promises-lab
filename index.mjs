// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  // try{
  // let waiting = await dbs.db1(id);
  // console.log(waiting);
  // }catch{
  // }
  console.log(dbs.db1(id));
  // Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
  //   .then((x) => {
  //     console.log(x);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  Promise.resolve(dbs.db1(id))
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });
  }