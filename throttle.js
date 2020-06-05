/**
 * 如果你持续触发事件，每隔一段时间，只执行一次事件。
 * 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
 * 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。
 * 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。
 */

 function throttle(func, wait) {
  var timeout, context, args, result
  var previous = 0

  var throttled = function() {
    context = this
    args = arguments
    var now = +new Date()
    var remain = wait - (now - previous)
    if (remain <=  0 || remain > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
    } else if (!timeout) {
      timeout = setTimeout(function() {
        previous = +new Date()
        timeout = null,
        func.apply(context, args)
      }, remain)
    }

  }
 }