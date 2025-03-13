from rest_framework import viewsets
from .models import Intern, Department
from .serializers import InternSerializer, DepartmentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class InternViewSet(viewsets.ModelViewSet):
    queryset = Intern.objects.all()
    serializer_class = InternSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
