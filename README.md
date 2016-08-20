#HELLO FRIEND

##SETUP

You gotta have node / npm installed. Get the newest version using [NVM](https://github.com/creationix/nvm).


### Get yer dependencies and stuff

```
npm install
```


### Start the application in dev mode
```
export NODE_ENV=development; webpack-dev-server --hot --host 0.0.0.0;
```


### Compile a production build to `/dist`

```
export NODE_ENV=production; webpack;
```
