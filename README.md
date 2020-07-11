This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the app

1. Download/Clone the repository on your system.
2. Open the src/components/App.js file and replace the value of IPAddress variable present on line no. 6 with your machine's IP address.
3. Save the changes.
4. Open two instances of command prompt/terminal on your system.
5. Go to the downloaded/cloned repository folder with the help of 'cd' command on both the instances.
6. On the first instance type 'node src/server.js'.
7. On the other instance, type 'npm install'. Once that is done, type 'npm start'.
8. Open any browser to load the app.
9. Type "<your machine IP>:3000" in the addressbar and hit Enter.
10. You would see an app with calculator on the LHS and a shared panel on the RHS.
11. Whenever you calculate something and hit '=' the calculation would be broadcasted to other users who are accessing the same app and vice versa.

#### Note: Divide by zero error is not handled. Also, the moment you close the tab of the browser on which the app was running, the results would be vanished and on rerunning the app the results would appear on the panel as and when other users including himself/herself start calculating. Before running this application just make sure your system has NodeJS installed on it. Also, if you want to checkout the hosted application then you can Access it [here](https://pruthak28.github.io/calculator-broadcast/)
