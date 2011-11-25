(function() {
  var aNext, aPrev, ctrl, goNext, goPrev, lnk, paginationLinks, paginationPar, qsel, qsela, trim, _i, _len;
  qsel = function(selector) {
    return document.querySelector(selector);
  };
  qsela = function(selector) {
    return document.querySelectorAll(selector);
  };
  trim = function(text) {
    return String(text).replace(/^\s+|\s+$/g, '');
  };
  paginationPar = qsel('#pagination p');
  paginationLinks = qsela('#pagination p a');
  for (_i = 0, _len = paginationLinks.length; _i < _len; _i++) {
    lnk = paginationLinks[_i];
    if (lnk.innerText === '\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f') {
      aPrev = lnk;
    }
    if (lnk.innerText === '\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f') {
      aNext = lnk;
    }
  }
  ctrl = document.createElement('BIG');
  ctrl.innerHTML = 'Ctrl&nbsp;&nbsp;&nbsp;&nbsp;';
  paginationPar.insertBefore(ctrl, paginationPar.children[paginationPar.children.length - 1]);
  goNext = function() {
    var href;
    if (href = aNext != null ? aNext.href : void 0) {
      return document.location.href = href;
    }
  };
  goPrev = function() {
    var href;
    if (href = aPrev != null ? aPrev.href : void 0) {
      return document.location.href = href;
    }
  };
  document.body.addEventListener('keydown', function(e) {
    var contentLength, target, _ref, _ref2;
    if (e.ctrlKey) {
      target = e.target;
      contentLength = 0;
      if (((_ref = target != null ? target.tagName : void 0) === 'TEXTAREA' || _ref === 'INPUT') && ((_ref2 = target != null ? target.type : void 0) !== 'radio' && _ref2 !== 'checkbox' && _ref2 !== 'submit' && _ref2 !== 'reset' && _ref2 !== 'button')) {
        contentLength = trim(target.value).length;
      }
      switch (e.keyIdentifier) {
        case 'Right':
          if (!(contentLength > 0)) {
            goNext();
          }
          break;
        case 'Left':
          if (!(contentLength > 0)) {
            goPrev();
          }
      }
      return null;
    }
  });
}).call(this);
