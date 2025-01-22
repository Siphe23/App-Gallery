import * as SQLite from 'expo-sqlite';

// Open the database asynchronously
export const openDatabaseAsync = async () => {
  return SQLite.openDatabase('gallery.db');
};

// Initialize the database
export const initializeDatabase = async () => {
  const db = await openDatabaseAsync();

  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uri TEXT,
        latitude REAL,
        longitude REAL,
        timestamp TEXT
      );`
    );
  });
};

// Insert an image with geolocation and timestamp
export const insertImage = async (uri, latitude, longitude, timestamp) => {
  const db = await openDatabaseAsync();

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO images (uri, latitude, longitude, timestamp) VALUES (?, ?, ?, ?);',
      [uri, latitude, longitude, timestamp]
    );
  });
};

// Fetch all images from the database
export const fetchImages = async () => {
  const db = await openDatabaseAsync();

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM images;',
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// Delete an image by ID
export const deleteImageById = async id => {
  const db = await openDatabaseAsync();

  db.transaction(tx => {
    tx.executeSql('DELETE FROM images WHERE id = ?;', [id]);
  });
};

// Update an image's URI (or other metadata)
export const updateImageUri = async (id, newUri) => {
  const db = await openDatabaseAsync();

  db.transaction(tx => {
    tx.executeSql('UPDATE images SET uri = ? WHERE id = ?;', [newUri, id]);
  });
};