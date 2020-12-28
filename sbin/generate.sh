#!/usr/bin/env sh

export APP_NAME=my-app

cd ${APP_NAME}

# @todo shell function with parameters
npx @api-platform/client-generator http://laravel.localhost/docs src/ --format swagger --resource adres
# npx @api-platform/client-generator http://laravel.localhost/docs src/ --format swagger --resource politiebureaus
# npx @api-platform/client-generator http://laravel.localhost/docs src/ --format swagger --resource links

cd .. && sbin/edited.sh