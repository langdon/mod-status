FROM fedora
RUN dnf install -y node npm git nodejs-yarn && dnf clean all 
RUN cd /opt && mkdir website && mkdir data-server
ADD runner.sh /runner.sh
ADD run-data-server.sh /run-data-server.sh
VOLUME /opt/website
VOLUME /opt/data-server
EXPOSE 8000
EXPOSE 9000
# start the development server
#ENTRYPOINT [ '/runner.sh' ] 

#for now, let's just go to bash
CMD [ "/bin/bash" ]
