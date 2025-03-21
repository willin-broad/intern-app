from rest_framework import serializers
from .models import Intern, Department, EducationBackground, WorkExperience, Department, UploadedFiles

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = [
            "id", "unique_application_id", "id_number", "full_name", "email", "phone_number",
            "gender", "physical_address", "county", "sub_county", "ward", "location",
            "application_status", "date_registered"
        ]

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationBackground
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'

class UserDepartmentSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source='department.name', read_only=True)

    class Meta:
        model = Department
        fields = ["id", "user", "department", "department_name", "sub_department", "reason_for_applying"]

class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFiles
        fields = '__all__'
