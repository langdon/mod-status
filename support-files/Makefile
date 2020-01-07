IMAGE_NAME := langdon/mod-status
DOCKER_FNAME := Dockerfile
SELINUX := :z

help:
		@echo "make build - Build and locally tag a new docker image."
		@echo "make build-force - Use a no-cache build"
		@echo "make run - Run the new image as if you were running task directly"

build: 
		@podman build --file=$(DOCKER_FNAME) . -t $(IMAGE_NAME)

build-force:
		@podman build --file=$(DOCKER_FNAME) --no-cache . -t $(IMAGE_NAME)

run:
		@podman run -d -P --volume `pwd`:/opt/website:z $(IMAGE_NAME) 

