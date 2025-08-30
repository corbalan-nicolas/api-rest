export default `
:root {
  --col-1: #f9f9f9;
  --col-2: #d33a3f;
}

#app {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  font-family: sans-serif;
}

header {
  background-color: var(--col-2);
  color: white;
}

.footer-data {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  text-align: center;
}

.h2 {
  font-size: 2rem;
  padding-bottom: .5rem;
}
`