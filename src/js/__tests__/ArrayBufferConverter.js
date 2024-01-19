import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

// - - - - - - - - - - - - - - - - - - -
// Должны вернуть исходную json-строку
// - - - - - - - - - - - - - - - - - - -
test('should receive json-string', () => {
  const converter = new ArrayBufferConverter(); // создаём новый экземпляр класса
  const bufferDate = getBuffer(); // создаём ArrayBuffer из json-строки
  converter.load(bufferDate); // создаём представление Uint16Array из переданного ArrayBuffer
  const convertedData = converter.toString(); // конвертируем Uint16Array в json-строку

  expect(convertedData).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

// - - - - - - - - - - - - - - - - - - - - - - - - -
// Должны выбросить ошибку 'Нет загруженных данных'
// - - - - - - - - - - - - - - - - - - - - - - - - -
test('throw on no data loaded', () => {
  const converter = new ArrayBufferConverter(); // создаём новый экземпляр класса
  const convertedData = () => converter.toString(); // пытаемся преобразовать несуществующие данные

  expect(convertedData).toThrow('No data loaded. Call load() first to load the data');
});
