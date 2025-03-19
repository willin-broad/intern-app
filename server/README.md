c# Intern Application Backend

This is the **Django** backend for the Intern Application. Follow the instructions below to set up and run the backend server locally.

## Prerequisites
Make sure you have the following installed:
- **Python** (>= 3.8)
- **pip** (Python package manager)
- **virtualenv** (for creating a virtual environment)
- **Git** (for version control)

---

## Backend Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/willin-broad/intern-app.git
cd intern-app
```

### **2. Create and Activate Virtual Environment**
```sh
python -m venv venv  # Create virtual environment
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows
```

### **3. Install Dependencies**
```sh
pip install -r requirements.txt
```

### **4. Configure Environment Variables**
Create a `.env` file in the root directory and add necessary environment variables:
```ini
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
```

### **5. Apply Migrations**
```sh
python manage.py migrate
```

### **6. Create a Superuser (Optional, for Admin Panel Access)**
```sh
python manage.py createsuperuser
```
Follow the prompts to create an admin user.

### **7. Run the Django Development Server**
```sh
python manage.py runserver
```
By default, the server runs at **http://127.0.0.1:8000/**

---

## API Testing (Optional)
If you want to test API endpoints, install **Postman** or use **cURL**.

Example:
```sh
curl http://127.0.0.1:8000/api/example/
```

---

## Running the Project in Production
For production, consider using:
- **Gunicorn** or **uWSGI** for Django
- **Nginx** or **Apache** for serving static files
- **Docker** for containerization

---

## Contributing
Feel free to fork the repo, create a new branch, and submit a PR.

---

## License
This project is licensed under the **MIT License**.

