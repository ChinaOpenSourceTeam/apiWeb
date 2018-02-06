#!/bin/bash
yarn install
yarn build
nginx -s reload
