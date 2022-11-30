BUILD_PATH="lib"
echo "Copy @blue-learn/component ⏳ "

# 1.Copy to BlueLearn App and Web ->  only for dev use
APP_PATH="../../../bluelearn-app/node_modules/@blue-learn/component"
APP_PATH_V2="../../../blAppV2/node_modules/@blue-learn/component"
WEB_PATH="../../../web/node_modules/@blue-learn/component"

[ -d $APP_PATH ] && rm -rf $APP_PATH/"lib" && echo "👉 Clear -> $APP_PATH/lib ✅ "
[ -d $APP_PATH_V2 ] && rm -rf $APP_PATH_V2/"lib" && echo "👉 Clear -> $APP_PATH_V2/lib ✅ "
[ -d $WEB_PATH ] && rm -rf $WEB_PATH/"lib" && echo "👉 Clear -> $WEB_PATH/lib ✅ "
mkdir -p $APP_PATH/"lib" && echo "👉 Link -> $APP_PATH/lib ✅ "
mkdir -p $APP_PATH_V2/"lib" && echo "👉 Link -> $APP_PATH_V2/lib ✅ "
mkdir -p $WEB_PATH/"lib" && echo "👉 Link -> $WEB_PATH/lib ✅ " #&& cd .. #uncomment when run local
[ -d $APP_PATH ] && cp -R $BUILD_PATH $APP_PATH && echo "👉 Copy Component -> BlueLearn-App ✅ "
[ -d $APP_PATH_V2 ] && cp -R $BUILD_PATH $APP_PATH_V2 && echo "👉 Copy Component -> BlueLearn-App ✅ "
[ -d $WEB_PATH ] && cp -R $BUILD_PATH $WEB_PATH && echo "👉 Copy Component -> BlueLearn-Web ✅ "
