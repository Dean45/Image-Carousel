(function() {
    var k = document.getElementsByClassName("kitty");
    var c = document.getElementsByClassName("cir");
    var timer;
    var current = 0;
    var traNow;
    //transitionNow: added to avoid bad user expirience when user clicks a photo dot that is already on screen

    setTimeout(moveKitties, 1500);

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 1500);
            traNow = false;
        }
    });

    for (var i = 0; i < c.length; i++) {
        c[i].addEventListener("click", getDotHandler(i));

        function getDotHandler(n) {
            return function(e) {
                if (e.target.classList.contains("on")) {
                    return;
                }
                if (traNow) {
                    return;
                }
                clearTimeout(timer);
                moveKitties(n);
            };
        }
    }

    function moveKitties(arg) {
        traNow = true;
        k[current].classList.remove("onscreen");
        k[current].classList.add("exit");
        c[current].classList.remove("on");

        if (typeof arg == "undefined") {
            current++;
            if (current >= k.length) {
                current = 0;
            }
        } else {
            current = arg;
        }
        k[current].classList.add("onscreen");
        c[current].classList.add("on");
    }
})();
