BUILD_PATH="lib"
echo "Copy @blue-learn/theme ⏳ "

# 1.Copy to BlueLearn App ->  only for dev use
APP_PATH="../../../bluelearn-app/node_modules/@blue-learn/theme"
[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy Theme -> BlueLearn-App ✅ "
