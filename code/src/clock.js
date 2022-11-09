export const getTimeString = (now) => {
    const hour = addZero(now.getHours(addZero));
    const minute = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());
    return `${hour}:${minute}:${seconds}`
}

const addZero = (time) => {
    if (time < 10) {
        return `0${time}`
    }
    else {
        return time
    }
}
const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}
