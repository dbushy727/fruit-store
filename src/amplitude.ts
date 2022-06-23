import amplitude from "amplitude-js";
import { User } from "./types";

export function trackEvent(user: User, event: string, properties: object = {}) {
  amplitude.getInstance().init("5e4277b64527a1e97e6d7e4d0bf9150e", user.id);

  amplitude.getInstance().logEvent(event, properties);
}

export function identify(user: User) {
  amplitude.getInstance().init("5e4277b64527a1e97e6d7e4d0bf9150e", user.id);
  amplitude.getInstance().setUserProperties({
    plan: user.plan,
  });
}
