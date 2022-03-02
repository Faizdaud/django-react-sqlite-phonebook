# FullStack (Django React Sqlite) Simple Phonebook App
### This app uses 2 of your computers localhost:
1. localhost: 8000 for BackEnd(Django)
2. localhost: 3001 for FrontEnd(React)

## Setting Up BackEnd
1. In terminal/command path of the project folder, activate the virtual enviroment with command: source env1/Scripts/activate
2. Change directory to backendapi folder: cd backendapi
3. In directory of the backend api folder, run python -m pip install Django 
4. Start the server with the command py manage.py runserver

*make sure you hace django installed in your computer first(If not use command: pip3 install djangorestframework in terminal)
*If there is any cors error use command: pip install django-cors-headers in terminal to fix it

## Setting Up FrontEnd
1. Open another terminal (yes,we are going to need more than 1)
2. Change directory to frontend_phone_book: cd frontend_phone_book
3. Install Npm with command: npm install
4. Start the server with command: npm start
5. *If you start the frontend server first before the backend server, you would need to refresh the web page(localhost:3001)
