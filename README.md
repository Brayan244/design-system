
## Storybook

Para iniciar el servidor de Storybook solo es necesario ejecutar:

```
yarn storybook
```

## Auto Releases Pre y Sandbox
Cuando se haga un merge de un PR a `master` se desencadenará una serie de `Git Actions` para realizar un release del proyecto, el unico requisito es asignarle al PR el label `patch / minor / major` según sea el caso
