let tclasses=prompt("Enter total classes held")
tclasses=Number.parseInt(tclasses)
let atclasses=prompt("Enter classes attend by student")
atclasses=Number.parseInt(atclasses)
let percentage

if(atclasses<=tclasses)
{
  percentage=(atclasses/tclasses)*100
  console.log("\n Percentage of class attended is",percentage)
  if(percentage<75 && percentage>=0)
  {
    console.log("\n Student is not allowed to sit in exam")
  }
  else{
    console.log("\n Student is allowed to sit in exam")
  }
}
else{
  console.log("\n Attended classes cannot be more than total classes held!")
}