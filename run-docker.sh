#!/usr/bin/env bash

set -a
source services.envar

developmentNet=$(docker network ls -f name=development -q)

if [[ -z $developmentNet ]]; then
  echo "Creating development network"
  docker network create development
fi

if [[ ${NODE_ENV} == 'production' ]]; then
  echo "Launching RECIPE APP Rest mode PRODUCTION..."
  export TARGET=release
else
  echo "Launching RECIPE APP Rest mode DEVELOPMENT..."
  export TARGET=development
fi

docker-compose up -d --build
