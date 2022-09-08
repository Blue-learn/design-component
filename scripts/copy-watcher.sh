#!/usr/bin/env sh

# Trigger on rebuild of lib
# Copy to BlueLearn App ->  only for dev use
APP_PATH="../bluelearn-app/node_modules/@blue-learn"
[ -d $APP_PATH ] && cp -R packages/$1 $APP_PATH/$1 && echo "👉 Watcher Copy $APP_PATH/$1 ✅ "

#NO_CODE_PATH="../no-code-platform/node_modules/@blue-learn/platform"
#[ -d $NO_CODE_PATH ] && cp -R packages/$1 $NO_CODE_PATH/$1 && echo "👉 Watcher Copy $NO_CODE_PATH/$1 ✅ "
