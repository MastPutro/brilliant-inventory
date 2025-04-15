## Setup Docker Compose
[Download compose](https://drive.google.com/file/d/1zTBKrcPhxKD2npFFgXwJ4Gj25g0ryW-Q/view?usp=sharing)

`docker-compose up -d`
## Migrate Database
`docker exec -it nama-container-app bash`
`php artisan migrate`

`version: '3.8'

services:
  app:
    image: username/laravel-breeze-react:latest
    ports:
      - "8000:8000"
    environment:
      DB_HOST: db
      DB_DATABASE: laravel
      DB_USERNAME: root
      DB_PASSWORD: secret
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: laravel
    ports:
      - "3306:3306"
`
