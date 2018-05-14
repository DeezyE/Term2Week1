function fullsState(abbr) {
  if (abbr === 'NSW') {
    return 'New South Wales';
  }
  else if (abbr === 'QLD') {
    return 'Queensland';
  }
  else if (abbr === 'WA') {
    return 'Western Australia';
  }
  else if (abbr === 'SA') {
    return 'South Australia';
  }
  else if (abbr === 'ACT') {
    return 'Australian Capital Territory';
  }
  else if (abbr === 'NT') {
    return 'Northern Territory';
  }
  else if (abbr === 'VIC') {
    return 'Victoria';
  }
  else if (abbr === 'TAS') {
    return 'Tasmania';
  }
}

const states = {
  NSW: 'New South Wales',
  QLD: 'Queensland',
  WA: 'Western Australia',
  SA: 'South Australia',
  ACT: 'Australian Capital Territory',
  NT: 'Northern Territory',
  VIC: 'Victoria',
  TAS: 'Tasmania'
}

abbr = prompt("Enter a state abbreviation", "State...").toUpperCase();
alert(states[abbr]);
// alert(fullsState(abbr));
