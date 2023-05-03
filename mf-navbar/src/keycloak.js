import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: 'http://localhost:8080/auth',
 realm: 'store-single-spa',
 clientId: 'single-spa',
});

export default keycloak;