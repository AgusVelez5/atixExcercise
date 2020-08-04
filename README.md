# AtixExcercise

## Pre requirements


*  [Git](https://git-scm.com/download)


*  [NodeJS](https://nodejs.org/es/download/)


*  [Docker](https://docs.docker.com/engine/install/)

## Installation and start

1. Open terminal, go to folder where you want to clone the repository and run: 
    
    `git clone https://github.com/AgusVelez5/atixExcercise`
2.  Move to folder:s

    `cd atixExcercise/`
3. Install dependencies:

    `npm install`

4. Create .env file and fill this variables FILE = linkedLines.txt 

5. Start:

    `npm start`
    
    
Running `npm start` will leave the service running at [http://localhost:3000](http://localhost:3000)

## Docker

```sh
docker build -t atix-api-image .

docker run --name=atix-api -d -p 3000:3000 atix-api-image
 ```

