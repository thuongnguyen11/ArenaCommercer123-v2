(() => {
  // node_modules/countup.js/dist/countUp.min.js
  var __assign = function() {
    return (__assign = Object.assign || function(t) {
      for (var i, n = 1, s = arguments.length; n < s; n++)
        for (var a in i = arguments[n])
          Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
      return t;
    }).apply(this, arguments);
  };
  var CountUp = function() {
    function t(t2, i, n) {
      var s = this;
      this.endVal = i, this.options = n, this.version = "2.6.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t3) {
        s.startTime || (s.startTime = t3);
        var i2 = t3 - s.startTime;
        s.remaining = s.duration - i2, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i2, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i2, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i2 / s.duration);
        var n2 = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
        s.frameVal = n2 ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i2 < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.finalEndVal !== null ? s.update(s.finalEndVal) : s.options.onCompleteCallback && s.options.onCompleteCallback();
      }, this.formatNumber = function(t3) {
        var i2, n2, a, e, o = t3 < 0 ? "-" : "";
        i2 = Math.abs(t3).toFixed(s.options.decimalPlaces);
        var r = (i2 += "").split(".");
        if (n2 = r[0], a = r.length > 1 ? s.options.decimal + r[1] : "", s.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
            s.options.useIndianSeparators && u === 4 && (l = 2, h = 1), u !== 0 && h % l == 0 && (e = s.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return s.options.numerals && s.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t4) {
          return s.options.numerals[+t4];
        }), a = a.replace(/[0-9]/g, function(t4) {
          return s.options.numerals[+t4];
        })), o + s.options.prefix + n2 + a + s.options.suffix;
      }, this.easeOutExpo = function(t3, i2, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t3 / s2)) * 1024 / 1023 + i2;
      }, this.options = __assign(__assign({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el = typeof t2 == "string" ? document.getElementById(t2) : t2, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window != "undefined" && this.options.enableScrollSpy && (this.error ? console.error(this.error, t2) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return s.handleScroll(s);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t3) {
          return t3();
        });
      }, this.handleScroll(this)));
    }
    return t.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i) && !t2.paused && t2.reset();
      }
    }, t.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i = t2 - this.startVal;
      if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else
        this.endVal = t2, this.finalEndVal = null;
      this.finalEndVal !== null ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, t.prototype.start = function(t2) {
      this.error || (t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, t.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, t.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, t.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, t.prototype.printValue = function(t2) {
      var i;
      if (this.el) {
        var n = this.formattingFn(t2);
        if ((i = this.options.plugin) !== null && i !== void 0 && i.render)
          this.options.plugin.render(this.el, n);
        else if (this.el.tagName === "INPUT")
          this.el.value = n;
        else
          this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, t.prototype.ensureNumber = function(t2) {
      return typeof t2 == "number" && !isNaN(t2);
    }, t.prototype.validateValue = function(t2) {
      var i = Number(t2);
      return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, t.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, t;
  }();

  // app/scripts/count-up.js
  function onCountUp() {
    let countNumber = document.getElementById(numberCountUp).innerHTML;
    const countUp = new CountUp(numberCountUp, countNumber, {
      enableScrollSpy: true
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
  document.addEventListener("shopify:section:load", () => {
    onCountUp();
  });
  window.onCountUp = onCountUp;
})();
