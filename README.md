# MVC Node E-Commerce App

## Instructions

Create a new folder mvc_ecommerce :

1- Create a new file call it server.js

2- Initialize your npm project ( npm init -y )

3- Install your Express and EJS dependencies ( npm i express ejs )

4- At the top load express & initialize your express app

## We'll implement the MVC Design Pattern for this application.

5- Copy the products array (located at the bottom) and paste it on a file named products.js in your Models Folder

6- Import your data into the getData.js controller function. Make sure your function returns the data back.

7- Create a root route that welcomes the user and gives them an option to go shop for products.

8- Create a '/products' route that shows all the products.

9- Create a '/products/new' route that contains a form to create a new product. ( the new product can have a name, price, and description)

10- Create a '/product/:id' route to search a product by the id.

11- Create a POST '/products' route that will add the new product data, that we send from the form to the array of products. At the bottom redirect the user to GET '/fruits' so the user can see the new product that was added.

12- Challenge: Create a template file that will show a 404 Not Found message to the user if the user goes to any other route that they are NOT allowed to go to.

How can we set this route on our server.js? that it will show our template if the user goes to some random page like 'http://localhost:3000/products/jadgfjasddfj'
