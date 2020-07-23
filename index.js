var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var nowServing = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeli.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      return `${katzDeliLine.length - 1}. ${katzDeliLine[i]}`;
    }
  }
} else {
  return "The line is currently empty.";
}  
