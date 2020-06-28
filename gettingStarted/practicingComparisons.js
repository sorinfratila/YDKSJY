/**
 * scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
 * It should return true if the meeting falls entirely within the work day
 * (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.
 *
 * const dayStart = "07:30";
 * const dayEnd = "17:45";
 *
 * function scheduleMeeting(startTime,durationMinutes) {
 *    // ..TODO..
 * }
 */

const dayStart = "07:30";
const dayEnd = "17:45";

const dayStartMs = new Date("1970-01-01T" + dayStart + "Z").getTime();
const dayEndMs = new Date("1970-01-01T" + dayEnd + "Z").getTime();

function scheduleMeeting(startTime, durationMinutes) {
  if (
    typeof startTime !== "string" ||
    startTime.length !== 5 ||
    typeof durationMinutes !== "number"
  ) {
    throw new Error(
      "startTime must be in format HH:MM and 5 length and durationMinutes must be a positive number"
    );
  }

  const durationInMiliseconds = durationMinutes * 60 * 1000;
  const startTimeMs = new Date("1970-01-01T" + startTime + "Z").getTime();

  if (
    startTimeMs >= dayStartMs &&
    dayEndMs >= startTimeMs + durationInMiliseconds
  ) {
    return true;
  }

  return false;
}

const res = scheduleMeeting("17:00", 45);
