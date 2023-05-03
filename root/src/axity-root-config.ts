import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@axity/mf-navbar",
  app: () => System.import<LifeCycles>("@axity/mf-navbar"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@axity/home",
  app: () => System.import<LifeCycles>("@axity/home"),
  activeWhen: ["/home"],
});
registerApplication({
  name: "@axity/mf-profile",
  app: () => System.import<LifeCycles>("@axity/mf-profile"),
  activeWhen: ["/profile"],
});
start({
  urlRerouteOnly: true,
});
