export async function login({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  