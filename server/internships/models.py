from django.db import models

# Create your models here.
import uuid

# Department Model
class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Intern Model
class Intern(models.Model):
    GENDER_CHOICES = [ #picking gender
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    id_number = models.CharField(max_length=20, unique=True)  # National ID
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    year_of_study = models.IntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    unique_application_id = models.CharField(max_length=20, unique=True, editable=False)

    # Auto-generate unique application ID
    def save(self, *args, **kwargs):
        if not self.unique_application_id:
            self.unique_application_id = str(uuid.uuid4())[:10]
        super().save(*args, **kwargs)
    # def save(self, *args, **kwargs):
    # if not self.unique_application_id:
    #     # Extract initials from username
    #     name_parts = self.username.split()
    #     initials = "".join([part[0].upper() for part in name_parts if part])

    #     # Generate a random number (or use user_id for uniqueness)
    #     random_part = str(self.user_id).zfill(5)  # Ensuring it's always 5 digits

    #     # Extract department initials (first 3 uppercase letters)
    #     dept_initials = self.department[:3].upper() if self.department else "DPT"

    #     # Format the date as DD-MM-YYYY
    #     date_part = self.date_registered.strftime("%d-%m-%Y") if self.date_registered else datetime.now().strftime("%d-%m-%Y")

    #     # Combine parts to create the unique ID
    #     self.unique_application_id = f"{initials}-{random_part}-{dept_initials}-{date_part}"
    # super().save(*args, **kwargs)

        #For User: Willin Broad Kiplimo, User ID: 123, Department: Finance, Registered Date: 30-03-2025 Generated ID: WBK-00123-FIN-30-03-2025


    def __str__(self):
        return f"{self.full_name} ({self.unique_application_id})"
