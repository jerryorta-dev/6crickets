# 6Crickets

## Code References

API returning time in seconds: 
`apps/api/src/app/app.service.ts`

Angular service consuming API:
`apps/sixcrickets-app/src/app/services/api.service.ts`

Countdown clock component:
`apps/sixcrickets-app/src/app/deadline-clock/deadline-clock.component.ts`

Camera function:
`apps/sixcrickets-app/src/app/camera-sufficiency/is-hardware-camera-sufficient-check.ts`

## Environment setup 

```bash
npm ci

```

or 

```bash
 npm install
```

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

## Issues

If you encounter any issues after running tests, please run:

```bash
 npx nx reset
```

This will clean any Nx cache and stop all Deamon processes that may be running.
