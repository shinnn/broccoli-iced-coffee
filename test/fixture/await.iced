# A basic serial loop
for i in [0..5]
  await setTimeout(defer(), 10)
  console.log 'Hi'
