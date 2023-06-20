import amplitude from "amplitude-js";
import { User } from "./types";

export function trackEvent(user: User, event: string, properties: object = {}) {
  amplitude.getInstance().init("117d1c4dbf7ecd79ee6543bb589bd88", user.id);

  amplitude.getInstance().logEvent(event, properties);
}

export function identify(user: User) {
  amplitude.getInstance().init("117d1c4dbf7ecd79ee6543bb589bd88", user.id);
  amplitude.getInstance().setUserProperties({
    plan: user.plan,
  });
}
