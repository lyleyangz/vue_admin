FROM registry-vpc.cn-shenzhen.aliyuncs.com/stl-test/nginx:v16
COPY ./dist /app/dist
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN rm /data/nginx/conf/nginx.conf
COPY ./nginx/nginx.conf /data/nginx/conf/
COPY ./nginx/conf.d/app.conf /data/nginx/conf/conf.d/

