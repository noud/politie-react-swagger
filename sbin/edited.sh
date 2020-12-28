#!/usr/bin/env sh

export APP_NAME=my-app

cp src-edited/config/entrypoint.js ${APP_NAME}/src/config/
cp ${APP_NAME}/src/index.js index.pre-gen.js
cp src-edited/index.js ${APP_NAME}/src/