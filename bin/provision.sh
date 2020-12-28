#!/usr/bin/env sh
APP_NAME=politie-client
# bin/app-name.sh

rm -r ${APP_NAME} node_modules package-lock.json yarn.lock

yarn install; yarn upgrade
node_modules/.bin/create-react-app ${APP_NAME}

cd ${APP_NAME}
yarn add redux react-redux redux-thunk redux-form react-router-dom connected-react-router prop-types lodash
yarn add bootstrap font-awesome

yarn add --dev @api-platform/client-generator
# yarn add --dev https://github.com/api-platform/client-generator

cd .. && bin/generate.sh
cd ${APP_NAME}
yarn start