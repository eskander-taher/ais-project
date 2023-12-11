1. create a server in digitalocean
2. ssh to into the server
3. update and upgrade the server
4. install node & npm
5. install nginx
6. install ufw if needed, setup firewall "ufw allow http, ufw allow "Nginx HTTP", ufw allow ssh"
7. create linux user "adduser username"
8. give user sudo prevleges "sudo usermod -aG sudo userName"
9. go to github project repo > settings > actions > add runner and follow instructions
10. get user permissions to do whatever it need in actions runner folder "sudo chmod -R 777 /var/www/actions-runner"
11. run config command from github instructions
12. anstall and run ./svc.sh "sudo ./svc.sh install sudo ./svc.sh start"
acs ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start,/usr/sbin/service nginx stop,/usr/sbin/service nginx restart
