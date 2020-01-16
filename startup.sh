#!/bin/bash

cd $(dirname $(readlink -f $0)) || exit

npm run server:prod
