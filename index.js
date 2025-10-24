(function (window, _) {
  window.jeuxBulb = window.jeuxBulb || {
    numz: {
      calculateDistance(p1, p2) {
        var a = Math.abs(p1.x - p2.x)
        var b = Math.abs(p1.y - p2.y)
        var c = Math.pow(a, 2) + Math.pow(b, 2)
        return Math.sqrt(c);
      },
      getAngleDegrees(pointA, pointB) {
        const distanceX = pointB.x - pointA.x
        const distanceY = pointB.y - pointA.y
        const radians = Math.atan2(distanceY, distanceX)
        const degrees = radians * 180 / Math.PI
        return degrees
      }
    },
    phyz: {},
  };

}(window, window._));