cp -rf ./nginx/test_env.conf ./nginx/app.conf
app_name=analyst
app_version=v1
image_name=$app_name:$app_version
docker stop $app_name
docker rm $app_name
docker rmi -f $image_name
docker build -t $image_name .
docker run -p 8080:80 --name $app_name $image_name  