function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5owgmDPlU1F":
        Script1();
        break;
      case "6ZijskTjf3L":
        Script2();
        break;
      case "6ed2QZZXmY5":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5qpxCrNKc3R');
const duration = 750;
const easing = 'ease-out';
const id = '5yyD9HNX9vs';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5qpxCrNKc3R');
const duration = 750;
const easing = 'ease-out';
const id = '6ecsVniTYIS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5qpxCrNKc3R');
const duration = 750;
const easing = 'ease-out';
const id = '5tF9rt6RErR';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
