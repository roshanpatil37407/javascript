let marks=prompt("Enter your Marks")
marks=Number.parseInt(marks)

if(marks<=25 && marks>=0)
{
  console.log("You get F grade")
}
  else if(marks>25 && marks<=45)
  {
  console.log("You get E grade")
  }
  else if(marks>45 && marks<=50)
  {
  console.log("You get D grade")
  }
  else if(marks>50 && marks<=60)
  {
   console.log("You get C grade")                        
  }  
  else if(marks>60 && marks<=80)
  {
    console.log("You get B grade")
  }
  else if(marks>80 && marks<=100)
  {
    console.log("You get A grade")
  }
   
else
{
  console.log("Invalid input")
}