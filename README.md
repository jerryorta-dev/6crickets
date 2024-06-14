# 6Crickets

## Start API server

Run: 

```bash
 npm run api
```

API serves at `http://localhost:3000/api`.

## Start the application

In another terminal, run:

```bash
 npm run app
```
App serves at `http://localhost:4200`.


## Run tests

Run:
  
  ```bash
  npm run test
  ```

### Camera Sufficiency

To run jest test on only camara sufficiency check, run:

```bash
 npx nx run sixcrickets-app:test --testFile=hardware-camera-sufficient-check.spec.ts

```bash
 npx nx run sixcrickets-app:test --testFile=is-hardware-camera-sufficient-check.spec.ts
```
