
# Rhino Splits

Rhino Splits is my Front-End capstopne projects at NSS. This is online payment simulator that users can sign in with Google account and create a new friend or contact. User is able to edit and delete the current user as well as make a payment to a friend. I'm planing to keep working on this project and add reminder and sending notification for frineds who are supposed to pay you back. 

* Live Demo:
https://rhino-splits.firebaseapp.com

## Screenshots

### Authentication view
![Login page](./src/images/01.jpg)

### Home page view
![Home page](src/images/02.jpg)

### Create a new contact
![create a new contact page](src/images/03.jpg)

### Created a new contact
![created contact](src/images/04.jpg)

### Edit / Delete / make a payment
![edit-delete-payment](src/images/05.jpg)

### Make a payment
![make a payment](src/images/06.jpg)

### Transaction histoty
![transaction](src/images/07.jpg)

### Logout view
![logout](src/images/08.jpg)

## Technologies Used
* React
* Sass
* Axios
* Reactstrap
* Bootstrap
* Prop-Types
* Materialize
* SweetAlert
* Google Fonts


## How to run this app
Note: To run this app you will need a firebase account and a new project.

### 1. Configure Firebase
1. Clone the repository to your local machine.
2. Run the following command in terminal to download the web dependencies: `npm install`
3. In the db folder, rename apiKeys.json.example to apiKeys.json.
4. In Firebase, create a new project.
5. Navigate to your config object, and copy the keys from Firebase into the apiKeys.json file.
6. Create a realtime database in Firebase, and start in test mode.
7. Navigate to the Data tab inside the realtime database, and import !base.json. You should now see sets of data titled Murals, Users, and Favorites.
8. Click on Murals, and the import the murals.json file. Repeat for Users, and Favorites.
9. Navigate to the Rules tab, and add the following rule:
```
    "users": {
      ".indexOn": "uid"
    },
```

### 2. Serve up the app
#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
