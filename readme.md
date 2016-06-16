### Start Here

    http://expressjs.com/en/starter/hello-world.html

### For test

    npm run dev

location ~ \.(jsp|do)$ {
            proxy_pass http://www_zijian_com;
            proxy_set_header HOST $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$ {
    expires      30d;
  }
