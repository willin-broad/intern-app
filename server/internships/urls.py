from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InternViewSet, DepartmentViewSet

router = DefaultRouter()
router.register(r'interns', InternViewSet)
router.register(r'departments', DepartmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('api/interns/', create_intern),
    # path('api/interns/<str:unique_code>/', get_intern),
]


