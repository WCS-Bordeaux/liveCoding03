#!/bin/bash

sudo npm install -g json-server;
json-server --watch db.json -d 250;
