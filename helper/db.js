import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('softb.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS employee (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, imageUri TEXT NOT NULL, department TEXT NOT NULL, job_title TEXT NOT NULL, phone TEXT NOT NULL, email TEXT NOT NULL, login_id TEXT NOT NULL, login_password TEXT NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertUser = (name, department, jobTitle, phone, email, loginId, loginPassword, imageUrl) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO employee (name, department, job_title, phone, email, login_id, login_password, imageUri) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
            [name, department, jobTitle, phone, email, loginId, loginPassword, imageUrl],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};

export const fetchUsers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM employee',
            [],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};

export const getUser = (name, department) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM employee WHERE name = ? AND department = ?',
          [name, department],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};