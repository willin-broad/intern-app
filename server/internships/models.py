from django.db import models

# Create your models here.
import uuid

# ✅ Department Model
class DepartmentList(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# ✅ Intern Model
class Intern(models.Model):
    GENDER_CHOICES = [ #picking gender
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    unique_application_id = models.CharField(max_length=20, unique=True, editable=False)#unique application id    
    id_number = models.CharField(max_length=20, unique=True)  # National ID
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    year_of_study = models.IntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    department = models.ForeignKey(DepartmentList, on_delete=models.SET_NULL, null=True)
    physical_address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    county = models.CharField(max_length=50, blank=True, null=True)
    sub_county = models.CharField(max_length=50, blank=True, null=True)
    ward = models.CharField(max_length=50, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    date_registered = models.DateTimeField(auto_now_add=True)#date registered
    application_status = models.CharField(max_length=20, default="Pending")#application status

    # Auto-generate unique application ID
    def save(self, *args, **kwargs):
        if not self.unique_application_id:
            self.unique_application_id = str(uuid.uuid4())[:10]
        super().save(*args, **kwargs)
    # def save(self, *args, **kwargs):
    #     if not self.unique_application_id:
    #         name_parts = self.full_name.split()
    #         initials = "".join([part[0].upper() for part in name_parts if part])
    #         random_part = str(uuid.uuid4().int)[:5]
    #         date_part = datetime.now().strftime("%d-%m-%Y")
    #         self.unique_application_id = f"{initials}-{random_part}-{date_part}"

    #     super().save(*args, **kwargs)
        #For User: Willin Broad Kiplimo, User ID: 123, Department: Finance, Registered Date: 30-03-2025 Generated ID: WBK-00123-FIN-30-03-2025


    def __str__(self):
        return f"{self.full_name} ({self.unique_application_id})"
    
    
# ✅ education bacground model
class EducationBackground(models.Model):
    """
    The EducationBackground model represents the educational background of an intern. 
    It is linked to the Intern model via a one-to-one relationship, ensuring that each intern 
    can have only one associated educational background record.
    """
    intern = models.OneToOneField(Intern, on_delete=models.CASCADE, related_name='education_background')
    EducationBackground = models.CharField(max_length=255)
    grade = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    expected_graduation = models.DateField(blank=True, null=True)
    institution = models.CharField(max_length=50)


# ✅ work experience model
class WorkExperience(models.Model):
    Intern = models.ForeignKey(Intern, on_delete=models.CASCADE, related_name='work_experience',blank=False, null=False)
    company_name = models.CharField(max_length=50)
    job_title = models.CharField(max_length=50) 
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)   
    job_description = models.TextField()#brief description of job done in the industry


# ✅ Department Preference Model
class Department(models.Model):
    intern = models.OneToOneField(Intern, on_delete=models.CASCADE, related_name='department_preference', blank=False, null=False,default=1)#intern applying to the department
    department = models.ForeignKey(DepartmentList, on_delete=models.CASCADE, related_name='preferences',blank=False, null=False,default=1)#department in the organization)
    sub_department = models.CharField(max_length=40,blank=False, null=False,default=1)#sub department in the department
    preference = models.TextField(max_length=200,blank=False, null=False,default=1)#reason  for applying to the department

# ✅ Files Upload Model
class UploadedFiles(models.Model):
    intern = models.OneToOneField(Intern, on_delete=models.CASCADE, related_name='uploaded_files')
    passport = models.FileField(upload_to='uploads/passports/')
    transcript = models.FileField(upload_to='uploads/transcripts/')
    CV = models.FileField(upload_to='uploads/CVs/')
    recommendation = models.FileField(upload_to='uploads/rec_letters/')

    # def clean(self):
    #     super().clean()
    #     if self.CV.size > 10 * 1024 * 1024:  # 10 MB limit
    #         raise ValidationError("The uploaded CV file size should not exceed 10 MB.")
    #     if self.passport.size > 5 * 1024 * 1024:  # 5 MB limit
    #         raise ValidationError("The uploaded passport file size should not exceed 5 MB.")