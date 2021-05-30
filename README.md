# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.
Run `npm install` to install all the dependencies listed in the package.json file.
Prettier was used to format the project.

The project is designed to be a replica of an E-commerce website. It handles only the frontend part, while the product data is fetched from a JSON file stored in the assets folder.
The user can add items in various quantities to their cart. They can view the cart by clicking the relevant link in the navbar.
The cart page shows all the items the user has added to it. The user can also change the amount of items or remove an item completely.
When the user is satisfied with their selection, they can click on te proceed to cjeckout button, hich will take them to a form to fill their details. THis form is placeholder only, as there is no backend functionality. It simply resets the cart and takes the user to an order confirmation page.
The user can also look at the details of any item by clicking on its image or name.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

On the main page of the application, select any item and its amount and press the add to cart button, to add it to your cart. For more details, click on the image or the product's name. Even from the new view, it is possible to add the item to your cart.

The cart can be accessed using the navbar on the top. It will show all itemss in your cart and the sum total of all items. From this view, it is possile to change the amount of any item and even remove it by pressing the red icon next to the item.

When the cart is not empty, it will have a button on the bottom to proceed to checkout. It will take the user to a form which will ask them to fill out a couple of details. Upon submitting the form, the cart is emptied.

