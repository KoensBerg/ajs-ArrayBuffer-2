// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Преобразование загруженных бинарных данных в json-строку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export default class ArrayBufferConverter {
  constructor() {
    this.bufferView = null; // буфер для хранения Unit16Array
  }

  // метод для загрузки данных из ArrayBuffer
  load(buffer) {
    // создаём Uint16Array из переданного ArrayBuffer
    this.bufferView = new Uint16Array(buffer);
  }

  // метод преобразования данных из ArrayBuffer в строку
  toString() {
    if (!this.bufferView) { // если не был создан Uint16Array
      throw new Error('No data loaded. Call load() first to load the data');
    }

    let result = '';

    this.bufferView.forEach((el) => {
      result += String.fromCharCode(el);
    });

    return result;
  }
}
