import { Alert } from "../models/weatherTypes";

/**
 * Generates a unique key for an alert.
 *
 * @param alert - The alert object.
 * @returns The generated key.
 */
const generateAlertKey = (alert: Alert): string => {
  return `${alert.sender_name}_${alert.start}_${alert.end}_${alert.tags.join(
    "_"
  )}`;
};

/**
 * Processes an array of alerts and returns an array of unique alerts.
 *
 * @param alerts - The array of alerts to process.
 * @returns An array of unique alerts.
 */
const processAlerts = (alerts: Alert[]): Alert[] => {
  const uniqueAlertMap = new Map<string, Alert>();

  alerts.forEach((alert) => {
    const key = generateAlertKey(alert);
    if (!uniqueAlertMap.has(key)) {
      uniqueAlertMap.set(key, alert);
    }
  });

  return Array.from(uniqueAlertMap.values());
};

export { generateAlertKey, processAlerts };
