IMAGE_NAME := langdon/mod-status
DOCKER_FNAME := Dockerfile
SELINUX := :z
BASE_DIR := "`pwd`/.."

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

run-i: 
		@podman run -it -P \
			--volume $(BASE_DIR)/front-end/website:/opt/website:z \
			--volume $(BASE_DIR)/data-server/server:/opt/data-server:z \
			--entrypoint "/bin/bash" \
			$(IMAGE_NAME) 

run-i-s: 
		@podman run -it -p 8000 \
			--volume $(BASE_DIR)/front-end/website:/opt/website:z \
			--volume $(BASE_DIR)/data-server/server:/opt/data-server:z \
			--entrypoint "/bin/bash" \
			--name "mod-status-server" \
			$(IMAGE_NAME) 

run-i-w: 
		@podman run -it -p 9000 \
			--volume $(BASE_DIR)/front-end/website:/opt/website:z \
			--volume $(BASE_DIR)/data-server/server:/opt/data-server:z \
			--entrypoint "/bin/bash" \
			--name "mod-status-website" \
			$(IMAGE_NAME) 

