// notificationUtils.ts
let unsubscribeFunction: (() => void) | null = null;

export const setNotificationUnsubscribe = (unsubscribe: () => void) => {
  unsubscribeFunction = unsubscribe;
};

export const getNotificationUnsubscribe = () => {
  return unsubscribeFunction;
};
