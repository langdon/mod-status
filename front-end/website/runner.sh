#!/bin/bash
cd /opt/website 
nodejs-yarn # install patternfly-react-seed dependencies
nodejs-yarn build # build the project
nodejs-yarn start --host 0.0.0.0
