FROM fedora
RUN dnf install -y node npm git nodejs-yarn && dnf clean all 
RUN cd /opt && mkdir website 
ADD runner.sh /runner.sh
VOLUME /opt/website
EXPOSE 3000
EXPOSE 9000
# start the development server
ENTRYPOINT [ '/runner.sh' ] 
