const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let k = parseFloat(sampleActivity);
    if (typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(k)) {
        return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / k) / (0.693 / HALF_LIFE_PERIOD));
};