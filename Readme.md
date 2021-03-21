# Docker compose ekample

This example demonstrate hvor to make a simple node application there connect to an exsisting prostgres docker container, where database i stored on host envireoment.

### History
20210321 Initial upload

## Used containers:

https://hub.docker.com/_/postgres
https://hub.docker.com/_/microsoft-mssql-server



### PostgreSQL

pgAdmin is used for GUI

Denne kommando startede en instans af prostgreSQL

docker run -p 5432:5432 --name postgres_test -e POSTGRES_PASSWORD=password -d postgres

I leve PostgreSQL du to leak of expirence, it is to dificult to manage ti. I go with the MSSQL 😊

### MSSQL server
MSSMS is used for GUI

Look for helpherer: https://dbafromthecold.com/2020/07/17/sql-server-and-docker-compose/

This command starts MSSQL express. Remark: When running Linux containers from Windows command line/Powershell, the environmental options (-e) require double quotes

The SQL Server container requires a secure password to startup: Minimum length 8 characters, including uppercase and lowercase letters, base 10 digits and/or non-alphanumeric symbols.

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu 

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server

## Node installation
npm init
npm install body-parser express mssql request
