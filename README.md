# Code generation | Frontend Advent #25

## Задача:
Добавить в шаблон генерации папки с `React-компонентом` файл стилей с использованием `CSS Modules`.

## Описание:
В файле `generateComponent.js`:
1. Добавьте новое поле `cssTemplate`, где будет находиться шаблон стилей для `CSS Modules`.
2. Реализуйте логику, которая создаёт файл со стилями в директории компонента.

## Проверка задания:
В терминале запустите команду `node generateComponent Example`.
Она должна создать папку `Example`, содержащую следующие файлы:
* `Example.tsx` — React-компонент.
* `Example.module.css` — файл стилей.

## Дополнительные материалы:
Документация по fs: https://nodejs.org/api/fs.html  
Видео - https://youtube.com/shorts/IZ_PcYWmltk?feature=share
