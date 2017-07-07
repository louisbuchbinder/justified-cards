#!/usr/bin/env bash
set -ex

npm run lint
npm test
npm run jsdoc
