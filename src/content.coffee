qsel = (selector) ->
  document.querySelector(selector)

qsela = (selector) ->
  document.querySelectorAll(selector)

trim = (text) ->
  String(text).replace /^\s+|\s+$/g, ''

paginationPar = qsel '#pagination p'
paginationLinks = qsela '#pagination p a'
for lnk in paginationLinks
  aPrev = lnk if lnk.innerText == '\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f'
  aNext = lnk if lnk.innerText == '\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f'

ctrl = document.createElement 'BIG'
ctrl.innerHTML = 'Ctrl&nbsp;&nbsp;&nbsp;&nbsp;'
paginationPar.insertBefore ctrl, paginationPar.children[paginationPar.children.length-1]


goNext = () ->
  if href = aNext?.href
    document.location.href = href

goPrev = () ->
  if href = aPrev?.href
    document.location.href = href

document.body.addEventListener 'keydown', (e) ->
  if e.ctrlKey
    target = e.target
    
    contentLength = 0
    
    if target?.tagName in ['TEXTAREA','INPUT'] and target?.type not in ['radio', 'checkbox', 'submit', 'reset', 'button' ]
      contentLength = trim(target.value).length
    
    switch e.keyIdentifier
      when 'Right' then goNext() unless contentLength > 0
      when 'Left' then goPrev() unless contentLength > 0
      # when 'Enter' then submitPost(target) if contentLength > 0
    null

