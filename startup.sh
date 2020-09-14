#!/bin/bash

cd $(dirname $(readlink -f $0)) || exit

nvm use 12.16.0
npm run server:prod
