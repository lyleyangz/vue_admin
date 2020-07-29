PROFILE=$1
token=$2
# 钉钉机器人地址
webhook='https://oapi.dingtalk.com/robot/send?access_token=b90c0dcb6aa1e7ab588b3c1b193487c5f7725fffc95b1b0b09cbd1bcd4a952ef'
keyword='brokershow'
host=''
if [ ${PROFILE} == 'test' ]; then
    host='http://120.24.168.112:30180'
elif [ ${PROFILE} == 'stage' ]; then
    host=''
elif [ ${PROFILE} == 'prod' ]; then
    host=''
fi

# 工作目录
src_root=$(pwd)
app_name=portal-browser-manage-system
node_modules_path=/usr/lib/jenkins/jenkins_home/node/$app_name
if [ ! -d $node_modules_path ]; then
  mkdir -p $node_modules_path
fi

# 项目打包
cd $src_root
cp -rf ./package.json $node_modules_path
cd $node_modules_path
npm i
cd $src_root
ln -s $node_modules_path/node_modules node_modules
npm run build:$PROFILE
rm -rf ./node_modules

# 构建docker镜像
mirror_tag=''
source_nginx_conf=''
target_nginx_conf=./nginx/conf.d/app.conf
if [ ${PROFILE} == 'test' ]; then




    mirror_tag=test
    source_nginx_conf=./nginx/conf.d/test.conf
elif [ ${PROFILE} == 'dev' ]; then
    mirror_tag=dev
    source_nginx_conf=./nginx/conf.d/dev.conf
elif [ ${PROFILE} == 'stage' ]; then
    mirror_tag=test
    source_nginx_conf=./nginx/conf.d/stage.conf
elif [ ${PROFILE} == 'prod' ]; then
    source_nginx_conf=./nginx/conf.d/prod.conf
    mirror_tag=pro
fi

mv $source_nginx_conf $target_nginx_conf
docker build -t registry-vpc.cn-shenzhen.aliyuncs.com/stl-${mirror_tag}/$app_name:$PROFILE .
docker push registry-vpc.cn-shenzhen.aliyuncs.com/stl-${mirror_tag}/$app_name:$PROFILE

curl https://cs.console.aliyun.com/hook/trigger?token=$token

# 钉钉通知
#webhook='https://oapi.dingtalk.com/robot/send?access_token=670d20b68bdcf6799398e140ea1fdf7cd8a1213e73f4653376ec43c75bf52acd'
#title="后台管理系统发布了，环境：$PROFILE"
#text="后台管理系统发布了，环境：$PROFILE \n\n [单击打开]($host) \n\n 更新说明:  \n\n$NOTE  \n\n"
#curl $webhook \
#    -H "Content-Type: application/json" \
#    -d "{\"msgtype\": \"markdown\",
#    \"markdown\":{
#    \"title\":\"$title\",
#    \"text\":\"$text\"
#}}"
