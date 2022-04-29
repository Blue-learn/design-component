#!/usr/bin/env sh

remove() {
    echo $1
    rm -r $1
}

# root
remove node_modules 
remove package-lock.json
remove yarn.lock

# packages
for d in packages/*; do 
remove $d/node_modules
remove $d/package-lock.json
remove $d/yarn.lock
remove $d/lib
done