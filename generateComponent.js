import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Получаем имя файла и директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Получаем имя компонента из аргументов командной строки
const componentName = process.argv[2];

if (!componentName) {
  console.error('Ошибка: укажите имя компонента.');
  process.exit(1);
}

// Директория для компонента
const componentDir = path.join(__dirname, componentName);

// Шаблон React-компонента
const componentTemplate = `
import React from 'react';
import styles from './${componentName}.module.css';

export const ${componentName} = () => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      <h1>${componentName}</h1>
    </div>
  );
};
`;

// Шаблон CSS модуля
const cssTemplate =

// Создание папки и файлов
try {
  // Создаём директорию
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  // Создаём .tsx файл
  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTemplate.trim());

  // Создаём .module.css файл
  // fs.writeFileSync(...;

  console.log(`Компонент ${componentName} успешно создан вместе с CSS модулем!`);
} catch (err) {
  console.error('Ошибка при создании компонента:', err);
}
