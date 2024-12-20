function typewrite(txt, tgt, speed) {
    let i = 0;
    
    const interval = setInterval(() => {
        if (i < txt.length) {
            tgt.innerHTML += txt[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}