let x = async() => {
  const response = await fetch("https://themealdb.com/api/json/v1/1/categories.php")
    
  return response.json()
  
}

console.log(x())