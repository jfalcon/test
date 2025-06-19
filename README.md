# Docker Dev Env for TS

## Running tests

This command builds a docker image with the code of this repository and runs the repository's tests.

```sh
./scripts/build_docker.sh my_app
docker run -t my_app ./run_tests.sh
```

## Running a specific test

This example runs all tests matching the name "basic":

```sh
./scripts/build_docker.sh my_app
docker run -t my_app ./run_tests.sh basic
```

## Running a vite dev server

Run this command to enable hot reloading via docker.

```sh
./scripts/build_docker.sh my_app
docker run --network=host -v .:/app -it my_app npm exec vite dev --host
```
