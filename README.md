# Bamazon
![Video of Bamazon application](/GIFs/buyProduct.gif)

The Bamazon app was created using MySQL, Node JS, the inquirer node module, and the mysql node module. A MySQL database has a table of ten products. Each product has a unique item ID, name, department, price, and quantity. This then connects to the Node JS application.

The application first displays the products table from the database. Then it prompts the user using inquirer for the ID of the item they would like to purchase. It then asks how many of the item they would like to buy. If the item ID is valid and there is sufficient quantity for their request, then it updates the table with the new lower quantity and shows the user their total.

If the item ID entered is not valid or there is insufficient quantity to fulfill their request, the application alerts them and asks them to choose again.

![Video of Bamazon application insufficient quantity error](/GIFs/insufficientQuantity.gif)
![Video of Bamazon application invalid ID error](/GIFs/invalidID.gif)

They are then asked if they would like to purchase something else. If yes, then the application runs again displaying the new inventory. If no, the connection to the database and application end.