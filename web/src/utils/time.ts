/**
 * Gets formatted current time local useful for display purposes.
 * @returns time as string in the format HH:MM:SS
 */
export const getTimeString = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

/**
 * Gets formatted current time EST useful for display purposes.
 * @returns time as string in the format HH:MM:SS EST
 */
export const getTimeStringEST = (): string => {
  const now = new Date();
  const estTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" }),
  );
  const hours = String(estTime.getHours()).padStart(2, "0");
  const minutes = String(estTime.getMinutes()).padStart(2, "0");
  const seconds = String(estTime.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds} EST`;
};

/**
 * Gets formatted current time JST useful for display purposes.
 * @returns time as string in the format HH:MM:SS EST
 */
export const getTimeStringJST = (): string => {
  const now = new Date();
  const jstTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }),
  );
  const hours = String(jstTime.getHours()).padStart(2, "0");
  const minutes = String(jstTime.getMinutes()).padStart(2, "0");
  const seconds = String(jstTime.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds} JST`;
};

/**
 * Gets formatted current time UTC useful for display purposes.
 * @returns time as string in the format HH:MM:SS UTC
 */
export const getTimeStringUTC = (): string => {
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds} UTC`;
};
