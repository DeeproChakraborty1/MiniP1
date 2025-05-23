export function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    let lastFn;
    let lastTime;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if (Date.now() - lastTime >= limit) {
                    func.apply(this, args);
                    lastTime = Date.now();
                }
            }, Math.max(limit - (Date.now() - lastTime), 0));
        }
    };
}