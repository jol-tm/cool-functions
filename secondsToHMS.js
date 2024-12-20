function secondsToHMS(sec) {
    if (isNaN(sec)) {
        return '00:00:00';
    }

    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec % 3600) / 60);
    let s = (sec % 60);

    h = String(h).padStart(2, '0');
    m = String(m).padStart(2, '0');
    s = String(s).padStart(2, '0');

    return `${h}:${m}:${s}`;
}
