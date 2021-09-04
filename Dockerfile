FROM ubuntu:latest

RUN apt update && apt install openssh-server sudo -y
RUN apt install git -y
RUN useradd -rm -d /home/ubuntu -s /bin/bash -g root -G sudo -u 1000 test 

RUN  echo 'test:test' | chpasswd
RUN service ssh start

EXPOSE 22

WORKDIR /home/ubuntu
RUN git init --bare

CMD ["/usr/sbin/sshd","-D"]