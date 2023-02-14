let year=prompt("Enter the year of service")
year=Number.parseInt(year)
let salary=prompt("Enter the salary")
salary=Number.parseInt(salary)
let bonus
if(year>5)
{
  bonus=salary*10/100
  console.log('Your bonus amount is:= %d',bonus)
  salary=salary+bonus
  console.log('Total Salary you get:=',salary)
}
else{
  console.log('You dont have any bonus amount')
}