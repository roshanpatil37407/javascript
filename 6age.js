let age1=prompt("Enter the first person age")
age1=Number.parseInt(age1)
let age2=prompt("Enter the second person age")
age2=Number.parseInt(age2)
let age3=prompt("Enter the third person age")
age3=Number.parseInt(age3)
// For Youngest Person
if(age1<age2)
{
  if(age1<age3)
  {
    console.log("\n First person is youngest")
  }
  else
  {
    console.log("\n Third person is youngest")
  }
}
else
{
  if(age2<age3)
  {
    console.log("\n Second person is youngest")
  }
  else
  {
    console.log("\n Third person is youngest")
  }
}
// For Oldest Person
if(age1>age2)
{
  if(age1>age3)
  {
    console.log("\n First person is oldest")
  }
  else
  {
    console.log("\n Third person is oldest")
  }
}
else
{
  if(age2>age3)
  {
    console.log("\n Second person is oldest")
  }
  else
  {
    console.log("\n Third person is oldest")
  }
}