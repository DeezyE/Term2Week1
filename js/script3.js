const me = {};

me['age'] = 37;
me['location'] = 'brisbane';

me['hobbies'] = ['games', 'riding', 'culture']

delete me.age

me['hobbies'].push('jokes')

me.hobbies.shift();

me['mother'] = {};

me.mother['age'] = 60;
me.mother['location'] = 'melbourne';
me.mother['name'] = 'toni';

function print_details(details) {
  for (let detail of Object.keys(details)) {
    console.log(detail);

  }
}

print_details(me);
me.print_details();
