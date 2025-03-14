# intern-app
an automated internship system that can address applications online
🚀 Django Backend - Intern App
📌 Setup Instructions
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/willin-broad/intern-app.git
cd intern-app
2️⃣ Create and Activate Virtual Environment
sh
Copy
Edit
# Create a virtual environment
python -m venv venv

# Activate the virtual environment (Windows)
venv\Scripts\activate

# Activate the virtual environment (Mac/Linux)
source venv/bin/activate
3️⃣ Install Dependencies
sh
Copy
Edit
pip install -r requirements.txt
4️⃣ Apply Migrations
sh
Copy
Edit
python manage.py migrate
5️⃣ Create a Superuser (Optional for Admin Panel)
sh
Copy
Edit
python manage.py createsuperuser
Follow the prompts to create a superuser account.

6️⃣ Run the Server
sh
Copy
Edit
python manage.py runserver
Your backend should now be running at http://127.0.0.1:8000/

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/interns/	Get all interns
POST	/api/interns/	Create a new intern
GET	/api/interns/<id>/	Get a single intern
PUT	/api/interns/<id>/	Update an intern
DELETE	/api/interns/<id>/	Delete an intern
🛠 Common Issues & Fixes
🔹 CORS Policy Issue
If you get a CORS error when connecting to React, install django-cors-headers:

sh
Copy
Edit
pip install django-cors-headers
Then, add this to settings.py:

python
Copy
Edit
INSTALLED_APPS = [
    "corsheaders",
    ...
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    ...
]

CORS_ALLOW_ALL_ORIGINS = True  # Allow frontend requests
Restart the server:

sh
Copy
Edit
python manage.py runserver
🎯 Next Steps
Connect to React frontend (http://localhost:5173/)
Deploy using Docker or a cloud service
🚀 Happy Coding!
