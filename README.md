## Repro for prisma types not carrying across to the web side

## Setup
0. Install dependencies
```yarn install```

1. Make sure redwood types are generated
```
yarn rw dev
```

2. Check that `.redwood/types/currentUser.d.ts` is generated


## What to look for?

### API side
In `api/src/services/pets/pets.ts`, look at the type of `name` on line 6. Does the type come through?

### Web side
In `web/src/pages/HomePage/HomePage.tsx`, look at the type of `currentUser` on line 6.  Does the type come through?


