## Usage

Pre requirements: node 16

```shell
npm i && npm start
```

Navigate to http://localhost:3000

### Via Docker

```shell
docker build -t app .
```

Once image built

```shell
docker run -p 80:80 app
```
Navigate to http://localhost

#### Docker compose
```shell
docker-compose up
```
Navigate to http://localhost