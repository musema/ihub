import { authenticate } from "./authenticate";
import { devAuthenticate } from "./devAuthenticate";

export function getAuthenticator() {
  if (process.env.NODE_ENV === "development") {
    return devAuthenticate;
  }
  return authenticate;
}
