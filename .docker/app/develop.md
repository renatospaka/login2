# Comandos importantes

## antes de executar o docker-compose up
docker run -v $(pwd):/home/node/app node:14.17.6-alpine3.14 npx @nestjs/cli new $(pwd)/environment
sudo chmod +x .docker/app/entrypoint.sh
