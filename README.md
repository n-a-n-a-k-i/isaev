# ISAEV

Сайт для проекта

## Запуск

Установить `pm2`:

```shell
pm2 serve build 5005 --spa --name isaev
```

## Подсказки

Проверка на неиспользуемые зависимости:

```shell
npm install -g depcheck
depcheck

npx depcheck

npm install -g depcheck typescript
```

Поиск новых релизов пакетов:

```shell
npm outdated
```

Обновление пакетов:

```shell
npm install -g npm-check-updates
ncu -u

npm update
```
