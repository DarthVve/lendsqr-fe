import axios from '../../api';

export const getUserData = async (): Promise<void> => {
    try {
        const response = await axios.get('/users');

        if (!('indexedDB' in window)) {
            console.log("This browser doesn't support IndexedDB.");
            return;
        }

        const lendsqrDB = window.indexedDB.open('lendsqr-client-Database', 1);
        lendsqrDB.onupgradeneeded = function (event) {
            const db = lendsqrDB.result;
            const userTable = db.createObjectStore('users', { keyPath: 'id' });
            userTable.transaction.oncomplete = function (event) {
                const userStore = db.transaction('users', 'readwrite').objectStore('users');
                response.data.forEach(function (user: object) {
                    userStore.add(user);
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
};


export const getUsersFromIndexedDB = async (): Promise<any[]> => {
    try {
        if (!('indexedDB' in window)) {
            console.log("This browser doesn't support IndexedDB.");
            return [];
        }

        const lendsqrDb = window.indexedDB.open('myDatabase', 1);
        lendsqrDb.onerror = () => {
            console.log('Failed to open IndexedDB database.');
        };

        const db = await new Promise<IDBDatabase>((resolve, reject) => {
            lendsqrDb.onsuccess = () => {
                resolve(lendsqrDb.result);
            };
            lendsqrDb.onerror = () => {
                reject(lendsqrDb.error);
            };
        });

        const transaction = db.transaction('users', 'readonly');
        if (!transaction) {
            console.log("Failed to start transaction on IndexedDB database.");
            return [];
        }

        const userStore = transaction.objectStore('users');
        const query = userStore.getAll();
        return new Promise((resolve, reject) => {
            query.onsuccess = () => {
                const users = query.result;
                resolve(users);
            };
            query.onerror = () => {
                console.log("Failed to get users from IndexedDB database.");
                reject(query.error);
            };
        });
    } catch (error) {
        console.error(error);
        return [];
    }
};
