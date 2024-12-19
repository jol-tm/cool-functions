function secondsToHMS(sec) {
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec % 3600) / 60);
    let s = (sec % 60);

    h < 10 ? h = "0" + h : h = h;
    m < 10 ? m = "0" + m : m = m;
    s < 10 ? s = "0" + s : s = s;

    return `${h}:${m}:${s}`;
}
